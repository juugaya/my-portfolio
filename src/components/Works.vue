<template>
  <div class="works-page">
    <h1>Works</h1>

    <p class="intro">
      これまでに個人開発として作成した制作物（WORKS）をまとめています。  
      prof.html の内容を Vue 用に再構成したページです。
    </p>

    <!-- 1. Java ハイ＆ローゲーム -->
    <section class="work">
      <h2>① Java：ハイ＆ローゲーム</h2>
      <p>Javaでハイ＆ローゲームを作成しました。</p>
      <p>
        <a href="https://juugaya.github.io/po/HighAndLowS07.java" target="_blank" class="link">
          ▶ ソースコードはこちら
        </a>
      </p>
    </section>

    <!-- 2. PHP 和暦変換 -->
    <section class="work">
      <h2>② PHP：西暦 → 和暦変換プログラム</h2>
      <p>PHPで西暦を和暦に変換するプログラムを作成しました。</p>

      <p>１つ目のファイル：</p>
      <a href="https://juugaya.github.io/po/Changeseireki.php" target="_blank" class="link">
        ▶ こちら
      </a>

      <p>２つ目のファイル：</p>
      <a href="https://juugaya.github.io/po/Changeseireki1.php" target="_blank" class="link">
        ▶ こちら
      </a>
    </section>

    <!-- 3. 簡易掲示板 -->
    <section class="work">
      <h2>③ PHP × Laravel：簡易掲示板</h2>
      <p>簡易掲示板のプログラムを作成しました。</p>

      <img 
  src="/GIF/phplaravelmybbs 2024-09-29 113237.gif"
  width="682"
  height="389"
  />
    </section>

    <!-- 4. SpringBoot CRUD -->
    <section class="work">
  <h2>④ SpringBoot × MySQL：CRUDアプリ（MVCモデル）</h2>
  <p>SpringBoot と MySQL と Eclipse を使用して CRUD アプリを作成しました。</p>

  <video 
    controls 
    class="work-video"
    src="/mp4/crud操作_ProductManagementSystem.mp4"
  ></video>
</section>


    <!-- 5. AOP 全カラム検索 -->
      <section class="work">
  <h2>⑤ Spring AOP：全カラム検索デモ</h2>
  <p>AOP実装により、全カラム検索ができる仕組みを実装しました。</p>

  <img 
    src="/GIF/aop_serch.gif"
    width="682"
    height="389"
  />
</section>
<section class="work">
  <h2>⑥ Selenium：E2E Test Automation</h2>
  <p>Selenium を使用してログイン → 検索 → 結果表示までの E2E 自動テストを実装しました。</p>

  <img 
    src="/selenium-demo.gif"
    width="682"
    height="389"
  />
</section>

  </div>

  




</template>

<style scoped>
.work-card {
  background: #111;
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid #00eaff;
  box-shadow: 0 0 12px rgba(0, 234, 255, 0.25);
  transition: 0.3s;
  text-align: center;
}

.work-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 0 20px rgba(0, 234, 255, 0.45);
}

.work-card h3 {
  color: #00eaff;
  margin-bottom: 12px;
  font-size: 1.3rem;
  text-shadow: 0 0 10px #00eaff;
}

.work-demo {
  width: 100%;
  max-width: 480px;
  border-radius: 8px;
  margin: 12px 0;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
}

.work-desc {
  color: #ccc;
  margin-bottom: 12px;
  line-height: 1.6;
}

.work-link {
  color: #00eaff;
  text-decoration: none;
  font-weight: bold;
}

.work-link:hover {
  text-shadow: 0 0 8px #00eaff;
}
.work-demo {
  width: 100%;
  max-width: 360px;   /* ← ここで大きさを調整 */
  height: auto;
  border-radius: 8px;
  margin: 12px auto;
  display: block;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
}

.works-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  color: #fff;
}

.intro {
  margin-bottom: 20px;
  line-height: 1.7;
}

.work {
  margin-bottom: 40px;
  padding: 20px;
  border-left: 4px solid #00eaff;
  background: #0f0f0f;
}

.link {
  color: #00eaff;
  text-decoration: none;
  font-weight: bold;
}

.link:hover {
  text-shadow: 0 0 8px #00eaff;
}

.work-video { width: 100%; max-width: 700px; height: auto; display: block; margin: 20px auto; border-radius: 8px; box-shadow: 0 0 12px #00eaff; }
</style>
