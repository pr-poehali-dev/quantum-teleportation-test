import json
import urllib.request
import xml.etree.ElementTree as ET
import re
from html import unescape

def strip_tags(text: str) -> str:
    """Удаляет HTML-теги и лишние пробелы."""
    clean = re.sub(r'<[^>]+>', '', text or '')
    clean = unescape(clean)
    clean = re.sub(r'\s+', ' ', clean).strip()
    return clean

def handler(event: dict, context) -> dict:
    """Возвращает последние новости с сайта tagfond.ru из RSS-ленты."""
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    limit = int((event.get('queryStringParameters') or {}).get('limit', 6))

    req = urllib.request.Request(
        'https://tagfond.ru/feed/',
        headers={'User-Agent': 'Mozilla/5.0'}
    )
    with urllib.request.urlopen(req, timeout=10) as response:
        xml_data = response.read()

    root = ET.fromstring(xml_data)
    ns = {'content': 'http://purl.org/rss/1.0/modules/content/'}

    items = []
    for item in root.findall('.//item')[:limit]:
        title = item.findtext('title', '').strip()
        link = item.findtext('link', '').strip()
        pub_date = item.findtext('pubDate', '').strip()
        description = strip_tags(item.findtext('description', ''))
        category = item.findtext('category', 'Новости').strip()

        # Обрезаем описание до 200 символов
        if len(description) > 200:
            description = description[:200].rsplit(' ', 1)[0] + '...'

        items.append({
            'title': title,
            'link': link,
            'date': pub_date,
            'description': description,
            'category': category,
        })

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Cache-Control': 'public, max-age=1800'
        },
        'body': json.dumps({'news': items}, ensure_ascii=False)
    }
