from flask import Flask, render_template, request, jsonify
import json

app = Flask(__name__)

with open('data/napoli_data.json') as f:
    DATA = json.load(f)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/search')
def search():
    query = request.args.get('q', '').lower()
    results = [item for item in DATA if query in item['title'].lower() or query in item['description'].lower()]
    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)
