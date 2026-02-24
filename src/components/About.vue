<template>
  <div class="about-page">
    <h1 class="section-title">About Me</h1>

    <!-- プロフィール -->
    <section class="about-section">
      <h2 class="section-subtitle">プロフィール</h2>
      <ul>
        <li><strong>氏名：</strong> OS</li>
        <li><strong>性別：</strong> 男性（35歳）</li>
        <li><strong>更新日：</strong> 2026/1/9</li>
      </ul>
    </section>

    <!-- スキル -->
    <section class="about-section">
      <h2 class="section-subtitle">スキル</h2>
      <ul>
        <li>Java / COBOL / ExcelVBA / AccessVBA / PowerShell</li>
        <li>Oracle / SQL Developer / JP1 / SVN / Git</li>
        <li>Excel / Word / Jira / ServiceNow / SharePoint</li>
      </ul>
    </section>

    <!-- 職務経歴 -->
    <section class="career-section">
      <h2 class="section-subtitle">職務経歴（抜粋）</h2>

      <div class="job">
        <h3>全共通MF（メインフレーム化）案件｜運用</h3>
        <p><strong>担当業務：</strong></p>
        <ul>
          <li>資産移行のための性能テスト仕様書の作成</li>
          <li>移行テストのエラーリスト作成</li>
          <li>生成AIの現新照合の出力結果の確認と調査</li>
        </ul>
        <p><strong>実績：</strong> 中間ファイルの資料作成、会議進行、質問作成と共有</p>
      </div>

      <div class="job">
        <h3>保険システムリプレイス支援｜テスト設計〜総合テスト</h3>
        <ul>
          <li>テスト設計、顧客打合せ、仕様書作成</li>
          <li>Excelマクロでチェックリスト自動化</li>
          <li>1日20件のテスト実施、10件のテストケース作成</li>
        </ul>
      </div>

      <div class="job">
        <h3>通信料金システム｜月次請求検算</h3>
        <ul>
          <li>月次請求の検算、SQL修正、手順書作成</li>
          <li>SharePoint 8000ファイルの分類・索引作成</li>
          <li>AccessVBA・PowerShellで業務効率化ツール作成</li>
        </ul>
      </div>

      <div class="job">
        <h3>データ移行設計｜基本設計</h3>
        <ul>
          <li>基本設計書作成、移行方式の比較（RMAN / datapump）</li>
          <li>データフロー図作成、移行イベント日数の算出</li>
        </ul>
      </div>

      <div class="job">
        <h3>在庫管理システム｜非互換調査・検証</h3>
        <ul>
          <li>帳票の非互換検証、SQL調査、Javaソース解析</li>
          <li>JP1でジョブ実行、テストケース作成</li>
        </ul>
      </div>

      <div class="job">
        <h3>車両運用管理システム｜総合試験</h3>
        <ul>
          <li>操作性テスト、エビデンス作成、クロスチェック</li>
          <li>PDF出力ファイルのバイナリ確認</li>
        </ul>
      </div>

      <div class="job">
        <h3>サーバーログ監視設定</h3>
        <ul>
          <li>WebSAM System Manager でログ監視設定</li>
          <li>JP1でジョブ設定、ServiceNowで申請処理</li>
        </ul>
      </div>

    </section>
  </div>
</template>

<style scoped>
.about-page {
  background: #0a0a0a;
  min-height: 100vh;
  padding: 60px 20px;
  color: #fff;
  /* 白カード（Works と同じ雰囲気） */
.white-card {
  background: #f7f9fa;
  color: #000;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 25px;
  border-left: 4px solid #00eaff;
  box-shadow: 0 0 10px rgba(0, 234, 255, 0.15);
}

}

/* タイトル */
.section-title {
  font-size: 2.4rem;
  margin-bottom: 40px;
  color: #00eaff;
  text-shadow: 0 0 12px #00eaff;
  text-align: center;
}

/* セクションの箱デザイン */
.about-section,
.career-section {
  background: #111;
  padding: 30px 20px;
  border-radius: 8px;
  margin-bottom: 40px;
  border-left: 4px solid #00eaff;
  box-shadow: 0 0 12px rgba(0, 234, 255, 0.2);
}

/* 小見出し */
.section-subtitle {
  font-size: 1.6rem;
  margin-bottom: 20px;
  color: #00eaff;
  text-shadow: 0 0 8px #00eaff;
}

/* 職務経歴カード */
.job {
  margin-bottom: 25px;
  padding: 20px;
  background: #0f0f0f;
  border-left: 4px solid #00eaff;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0, 234, 255, 0.15);
}

.job h3 {
  color: #00eaff;
  margin-bottom: 10px;
}

.job ul li {
  color: #ccc;
  line-height: 1.6;
}
</style>
