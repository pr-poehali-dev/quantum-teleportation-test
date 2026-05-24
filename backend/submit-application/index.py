import json
import os
import psycopg2

def handler(event: dict, context) -> dict:
    """Сохраняет заявку от предпринимателя в базу данных. v2"""
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    email = body.get('email', '').strip()
    service = body.get('service', '').strip()
    message = body.get('message', '').strip()

    if not name or not phone or not service:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            'body': {'error': 'Заполните обязательные поля: имя, телефон, услуга'}
        }

    schema = os.environ.get('MAIN_DB_SCHEMA', 'public')
    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()
    cur.execute(
        f"INSERT INTO {schema}.applications (name, phone, email, service, message) VALUES (%s, %s, %s, %s, %s) RETURNING id",
        (name, phone, email, service, message)
    )
    app_id = cur.fetchone()[0]
    conn.commit()
    cur.close()
    conn.close()

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
        'body': {'success': True, 'id': app_id}
    }