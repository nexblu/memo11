# Note App
this is a note app created based on the hackfest competition

## Our Teams
- Andana Farras Pramudita & Syarif Ramdani Lubis (Hacker)
- Wicaksono Hanif Supriyanto (Hustler)
- Kadek Agus Perdiana (Hipster)

## App Technology
- Flutter (Mobile App)
- MongoDB (Database)
- Google API (Supporting Features)
- OCR (Scanner Text)

## Product & Platform
Our application will be designed as a notes application with
several superior features to answer SDGS problems point 4
and point 15. One of the main features we offer is digitizing
notes using artificial intelligence (AI) in the form of Optical
Character Recognition (OCR) which allows users to change
everything text form into digital notes.

With this technology, scanned notes in physical form can be
converted into various note templates that we have provided.
These digital notes are not limited to paper notes, but any text
that AI can recognize. Apart from that, our application is
designed to have the ability to translate voice recordings into
note form. Note-taking using the type and write method is
also still available.

## How To Run This App
1. First Install NodeJS And Python
2. And Install pnpm
```bash
npm install -g pnpm
```
3. And Install Package
```bash
pnpm install && pip install -r requirements.txt
```
4. And Create .env For Run The App
```env
url=mongodb+srv://memo11:nexblu634824@memo11.vlqp4xj.mongodb.net/?retryWrites=true&w=majority
api_key=nexblu-code11
app_pw=orfd xfvf urcj arsb
```
5. Run ReactJS As Front End
```bash
pnpm run dev
```
6. Run FastAPI As Back End
```bash
uvicorn main:app --reload
```

