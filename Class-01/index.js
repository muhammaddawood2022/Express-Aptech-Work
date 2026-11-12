const express = require("express");
const app = express();
const port = 3000;

const page = (content, title = "Express App") => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: "Inter", sans-serif;
            min-height: 100vh;
            color: #fff;
            background:
                radial-gradient(circle at 15% 20%, #4f46e5 0%, transparent 30%),
                radial-gradient(circle at 85% 80%, #9333ea 0%, transparent 30%),
                #080812;
            overflow-x: hidden;
        }

        body::before {
            content: "";
            position: fixed;
            inset: 0;
            pointer-events: none;
            background-image:
                linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px);
            background-size: 40px 40px;
        }

        nav {
            width: 90%;
            max-width: 1150px;
            margin: 25px auto;
            padding: 16px 22px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            background: rgba(255,255,255,.06);
            border: 1px solid rgba(255,255,255,.1);
            backdrop-filter: blur(20px);
            border-radius: 18px;
        }

        .logo {
            font-size: 21px;
            font-weight: 800;
            letter-spacing: -1px;
        }

        .logo span {
            color: #8b5cf6;
        }

        nav a {
            color: #aaa;
            text-decoration: none;
            font-size: 14px;
            transition: .3s;
        }

        nav a:hover {
            color: white;
        }

        .hero {
            min-height: calc(100vh - 100px);
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 60px 20px;
            position: relative;
        }

        .hero-content {
            max-width: 850px;
            z-index: 2;
        }

        .badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 9px 15px;
            border-radius: 50px;

            background: rgba(139,92,246,.12);
            border: 1px solid rgba(139,92,246,.3);
            color: #c4b5fd;

            font-size: 13px;
            margin-bottom: 25px;
        }

        .dot {
            width: 7px;
            height: 7px;
            background: #22c55e;
            border-radius: 50%;
            box-shadow: 0 0 12px #22c55e;
        }

        h1 {
            font-size: clamp(48px, 8vw, 86px);
            line-height: .98;
            letter-spacing: -5px;
            font-weight: 800;
            margin-bottom: 25px;
        }

        h1 span {
            background: linear-gradient(90deg, #a78bfa, #ec4899, #60a5fa);
            -webkit-background-clip: text;
            color: transparent;
        }

        .description {
            max-width: 620px;
            margin: auto;
            color: #9ca3af;
            line-height: 1.7;
            font-size: 17px;
        }

        .buttons {
            margin-top: 35px;
            display: flex;
            justify-content: center;
            gap: 14px;
            flex-wrap: wrap;
        }

        .btn {
            padding: 14px 23px;
            border-radius: 12px;
            text-decoration: none;
            font-weight: 600;
            font-size: 14px;
            transition: .3s;
        }

        .btn-primary {
            color: white;
            background: linear-gradient(135deg, #7c3aed, #a855f7);
            box-shadow: 0 10px 35px rgba(124,58,237,.35);
        }

        .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 40px rgba(124,58,237,.5);
        }

        .btn-secondary {
            color: #ddd;
            background: rgba(255,255,255,.06);
            border: 1px solid rgba(255,255,255,.1);
        }

        .btn-secondary:hover {
            background: rgba(255,255,255,.1);
            transform: translateY(-3px);
        }

        .stats {
            display: flex;
            justify-content: center;
            gap: 55px;
            margin-top: 70px;
        }

        .stat h3 {
            font-size: 25px;
        }

        .stat p {
            color: #777;
            font-size: 12px;
            margin-top: 5px;
        }

        /* PROFILE */

        .profile-wrapper {
            min-height: 80vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 50px 20px;
        }

        .profile-card {
            width: 420px;
            padding: 45px 35px;
            text-align: center;

            background: rgba(255,255,255,.06);
            border: 1px solid rgba(255,255,255,.12);
            backdrop-filter: blur(25px);
            border-radius: 28px;

            box-shadow:
                0 30px 100px rgba(0,0,0,.4),
                inset 0 1px rgba(255,255,255,.08);
        }

        .avatar {
            width: 110px;
            height: 110px;
            margin: 0 auto 25px;

            display: flex;
            justify-content: center;
            align-items: center;

            border-radius: 50%;
            font-size: 42px;
            font-weight: 800;

            background: linear-gradient(135deg, #7c3aed, #ec4899);
            box-shadow: 0 15px 40px rgba(124,58,237,.35);
        }

        .profile-card h1 {
            font-size: 34px;
            letter-spacing: -2px;
            margin-bottom: 10px;
        }

        .username {
            color: #a78bfa;
            font-size: 14px;
        }

        .profile-text {
            color: #888;
            font-size: 14px;
            line-height: 1.7;
            margin: 20px 0 28px;
        }

        @media(max-width: 600px) {
            nav {
                width: 94%;
            }

            h1 {
                letter-spacing: -3px;
            }

            .stats {
                gap: 25px;
            }

            .profile-card {
                padding: 35px 22px;
            }
        }
    </style>
</head>

<body>

    <nav>
        <div class="logo">EXPRESS<span>.</span></div>
        <a href="/">Home</a>
    </nav>

    ${content}

</body>
</html>
`;


app.get("/", (req, res) => {

    res.send(page(`
        <main class="hero">

            <div class="hero-content">

                <div class="badge">
                    <span class="dot"></span>
                    Express.js is running
                </div>

                <h1>
                    Build something<br>
                    <span>extraordinary.</span>
                </h1>

                <p class="description">
                    A modern Express.js application with a beautiful,
                    responsive interface. Fast, simple and powerful.
                </p>

                <div class="buttons">
                    <a href="/Ali" class="btn btn-primary">
                        View Profile →
                    </a>

                    <a href="#stats" class="btn btn-secondary">
                        Explore
                    </a>
                </div>

                <div class="stats" id="stats">

                    <div class="stat">
                        <h3>100%</h3>
                        <p>Responsive</p>
                    </div>

                    <div class="stat">
                        <h3>Fast</h3>
                        <p>Performance</p>
                    </div>

                    <div class="stat">
                        <h3>Node</h3>
                        <p>Powered</p>
                    </div>

                </div>

            </div>

        </main>
    `, "Home | Express"));
});


app.get("/:username", (req, res) => {

    const username = req.params.username;
    const firstLetter = username.charAt(0).toUpperCase();

    res.send(page(`
        <main class="profile-wrapper">

            <div class="profile-card">

                <div class="avatar">
                    ${firstLetter}
                </div>

                <h1>
                    ${username}
                </h1>

                <div class="username">
                    @${username.toLowerCase()}
                </div>

                <p class="profile-text">
                    Welcome to the profile of <strong>${username}</strong>.
                    This page is dynamically generated using
                    Express.js route parameters.
                </p>

                <div class="buttons">

                    <a href="/" class="btn btn-primary">
                        ← Back Home
                    </a>

                </div>

            </div>

        </main>
    `, `${username} | Profile`));
});


app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});
