function generatePortfolioCode() {
    const name = document.getElementById('name').value;
    const selectedStyle = document.getElementById('style').value;

    if (!name) {
        alert('Please enter your name.');
        return;
    }

    const codeOutput = document.getElementById('codeOutput');
    let portfolioCode = '';

    switch (selectedStyle) {
        case 'default':
            portfolioCode = generateDefaultStyleCode(name);
            break;
        case 'modern':
            portfolioCode = generateModernStyleCode(name);
            break;
        default:
            alert('Invalid style selection.');
            return;
    }

    codeOutput.textContent = portfolioCode;
}

function generateDefaultStyleCode(name) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${name}'s Portfolio</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            text-align: center;
        }

        header {
            background-color: #333;
            color: white;
            padding: 10px;
            font-size: 24px;
        }

        main {
            padding: 20px;
        }
    </style>
</head>
<body>
    <header>
        Welcome to ${name}'s Portfolio
    </header>
    <main>
        <p>Hello, I'm ${name}. This is my portfolio website.</p>
        <!-- Add your portfolio content here -->
    </main>
</body>
</html>
    `;
}

function generateModernStyleCode(name) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${name}'s Modern Portfolio</title>
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            background-color: #e6e6e6;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            text-align: center;
        }

        header {
            background-color: #4285f4;
            color: white;
            padding: 20px;
            font-size: 24px;
        }

        main {
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
    </style>
</head>
<body>
    <header>
        Welcome to ${name}'s Modern Portfolio
    </header>
    <main>
        <p>Hello, I'm ${name}. This is my modern portfolio website.</p>
        <!-- Add your portfolio content here -->
    </main>
</body>
</html>
    `;
}
