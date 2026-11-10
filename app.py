from flask import Flask, render_template, send_file
import qrcode
from io import BytesIO
import os

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/qr")
def qr_code():
    # After deployment, this creates a QR code for your public website URL.
    site_url = os.environ.get("SITE_URL", "http://127.0.0.1:5000")
    img = qrcode.make(site_url)
    buffer = BytesIO()
    img.save(buffer, format="PNG")
    buffer.seek(0)
    return send_file(buffer, mimetype="image/png", download_name="proposal_qr.png")

if __name__ == "__main__":
    app.run(debug=True)
