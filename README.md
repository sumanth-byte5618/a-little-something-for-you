# A Little Something For You

A small, mobile-friendly proposal website made with Python Flask.

## Run it on your computer

1. Install Python 3.10 or newer.
2. Open a terminal in this project folder.
3. Install the packages:

   ```bash
   pip install -r requirements.txt
   ```

4. Start the website:

   ```bash
   python app.py
   ```

5. Open `http://127.0.0.1:5000` in your browser.

## Put it online

To let someone open it by scanning a QR code, deploy this Flask project to a hosting service that supports Python web apps.

After deployment:
1. Copy your public HTTPS website URL.
2. Set an environment variable named `SITE_URL` to that exact URL.
3. Open `https://YOUR-WEBSITE-URL/qr` to view/download the QR code.
4. Scan-test the QR code on another phone before sharing it.

The QR endpoint defaults to localhost when `SITE_URL` is not set. A localhost QR code will only work on your own computer, so set `SITE_URL` after deployment.

## Personalise it

- Edit the questions in `static/script.js`.
- Edit the proposal message in `templates/index.html`.
- Change colours and fonts in `static/style.css`.

Answers stay in the visitor's browser and are not sent to a server or saved by this project. Keep the message respectful and let the other person answer freely.
