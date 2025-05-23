<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Jusas's Burguer</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      background: white;
      color: black;
    }

    header {
      background: orange;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
    }

    header h1 {
      font-size: 1.5rem;
      font-weight: 800;
      margin-left: 200%;
      margin-right: auto;
      white-space: nowrap;
    }

    .logo {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }

    .container {
      padding: 1rem;
    }

    .search-input {
      width: 100%;
      padding: 0.5rem;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      margin-bottom: 1rem;
    }

    .banner {
      width: 100%;
      border-radius: 10px;
      margin-top: 1rem;
    }

    .banner img {
      width: 200px;
      height: 200px;
      border-radius: 10px;
    }

    .section-title {
      font-weight: bold;
      font-size: 1.2rem;
      margin: 1rem 0 0.5rem;
    }

    .card {
      display: flex;
      align-items: center;
      border: 1px solid #eee;
      padding: 1rem;
      border-radius: 10px;
      margin-bottom: 1rem;
      background-color: #f9f9f9;
    }

    .card img {
      width: 80px;
      height: 80px;
      border-radius: 10px;
      object-fit: cover;
      margin-right: 1rem;
    }

    .card-content {
      flex: 1;
    }

    .card-content h3 {
      color: red;
      font-weight: bold;
      margin: 0;
    }

    .card-content p {
      font-size: 0.9rem;
      color: gray;
      margin: 0.2rem 0;
    }

    .button {
      background: teal;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      cursor: pointer;
    }

    @media (max-width: 600px) {
      .card {
        flex-direction: column;
        align-items: flex-start;
      }

      .card img {
        margin-bottom: 0.5rem;
      }

      .card-content {
        width: 100%;
      }

      .banner img {
        width: 450px;
        height: 200px;
      }

      header h1{
        margin-left: 35%;
        margin-right: auto;
      }
    }
  </style>
</head>
<body>
  <header>
    <div style="display: flex; align-items: center; gap: 0.5rem;">
      <h1>JUSAS'S BURGUER</h1>
    </div>
    <img src="https://assets.menuintegrado.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsiZGF0YSI6MTM2NzI3NTksInB1ciI6ImJsb2JfaWQifX0=--c99e4fb1dead58f0a211370fd520f656fc9fc69a/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fZmlsbCI6WzE2MCwxNjBdfSwicHVyIjoidmFyaWF0aW9uIn19--ffd05376606ea882bf50c3e602f6febf6a0e6791/1.png" alt="Logo" class="logo">
  </header>

  <div class="container">
    <input class="search-input" placeholder="Procure um lanchezinho vai!">

    <div class="banner">
      <img src="https://assets.menuintegrado.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsiZGF0YSI6MTM2NzI1MjcsInB1ciI6ImJsb2JfaWQifX0=--b8a9539175e948193ab43a956b4be04456d502b6/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJqcGVnIiwicmVzaXplX3RvX2ZpbGwiOls0MDAsNDAwXX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--2a1faf943e202820e5097e5e375b8164061e12db/202408072352_FI8e_.jpeg" alt="Banner">
    </div>

    <h2 class="section-title">Os mais pedidos 🔥</h2>

    <div class="card">
      <img src="https://assets.menuintegrado.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsiZGF0YSI6MTM2NzI1MjcsInB1ciI6ImJsb2JfaWQifX0=--b8a9539175e948193ab43a956b4be04456d502b6/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJqcGVnIiwicmVzaXplX3RvX2ZpbGwiOls0MDAsNDAwXX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--2a1faf943e202820e5097e5e375b8164061e12db/202408072352_FI8e_.jpeg" alt="X-Frango">
      <div class="card-content">
        <h3>X-Frango</h3>
        <p>Hamburguer com tal tal tal tal tal</p>
      </div>
      <button class="button">R$ 12,00</button>
    </div>

    <div class="card">
      <img src="https://assets.menuintegrado.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsiZGF0YSI6MTM2NzI1MjcsInB1ciI6ImJsb2JfaWQifX0=--b8a9539175e948193ab43a956b4be04456d502b6/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJqcGVnIiwicmVzaXplX3RvX2ZpbGwiOls0MDAsNDAwXX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--2a1faf943e202820e5097e5e375b8164061e12db/202408072352_FI8e_.jpeg" alt="X-Frango">
      <div class="card-content">
        <h3>X-Frango</h3>
        <p>Hamburguer com tal tal tal tal tal</p>
      </div>
      <button class="button">R$ 12,00</button>
    </div>

    <div class="card">
      <img src="https://assets.menuintegrado.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsiZGF0YSI6MTM2NzI1MjcsInB1ciI6ImJsb2JfaWQifX0=--b8a9539175e948193ab43a956b4be04456d502b6/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJqcGVnIiwicmVzaXplX3RvX2ZpbGwiOls0MDAsNDAwXX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--2a1faf943e202820e5097e5e375b8164061e12db/202408072352_FI8e_.jpeg" alt="X-Frango">
      <div class="card-content">
        <h3>X-Frango</h3>
        <p>Hamburguer com tal tal tal tal tal</p>
      </div>
      <button class="button">R$ 12,00</button>
    </div>
  </div>
</body>
</html>
