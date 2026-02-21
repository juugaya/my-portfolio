<template>
    <h1>Works</h1>
  </template>
<template>
    <div class="works-page">
      <h1>Works</h1>
      <p class="intro">
        実務で携わったシステム開発・運用・テスト業務の中から、
        特に成果が大きかったものをまとめています。
      </p>
  
      <!-- 1. 生成AI × 資産移行（性能テスト・照合） -->
      <section class="work">
        <h2>① 資産移行 × 生成AI支援（性能テスト・照合）</h2>
        <ul>
          <li>性能テスト仕様書の作成</li>
          <li>移行テストのエラーリスト作成</li>
          <li>生成AIに取り込む中間ファイルの特定・整備</li>
          <li>生成AIの現新照合結果の確認・調査</li>
        </ul>
        <p class="tech">使用技術：COBOL / Oracle / SQL Developer / Azure</p>
      </section>
  
      <!-- 2. 保険システムリプレイス（テスト設計〜総合テスト） -->
      <section class="work">
        <h2>② 保険システムリプレイス（テスト設計〜総合テスト）</h2>
        <ul>
          <li>テスト設計、顧客打合せ、仕様書作成</li>
          <li>Excel マクロでチェックリスト自動化（重複ID検出）</li>
          <li>1日20件のテスト実施、10件のテストケース作成</li>
        </ul>
        <p class="tech">使用技術：Java / Oracle / JP1 / Excel / Jira</p>
      </section>
  
      <!-- 3. 通信料金システム（月次請求検算） -->
      <section class="work">
        <h2>③ 通信料金システム（月次請求検算）</h2>
        <ul>
          <li>月次請求の検算、SQL修正、手順書作成</li>
          <li>SharePoint 8000ファイルの分類・索引作成</li>
          <li>AccessVBA・PowerShellで業務効率化ツール作成</li>
        </ul>
        <p class="tech">使用技術：ExcelVBA / AccessVBA / PowerShell / SharePoint</p>
      </section>
  
      <!-- 4. データ移行設計（基本設計） -->
      <section class="work">
        <h2>④ データ移行設計（基本設計）</h2>
        <ul>
          <li>基本設計書作成、移行方式の比較（RMAN / datapump）</li>
          <li>データフロー図作成、移行イベント日数の算出</li>
        </ul>
        <p class="tech">使用技術：Java / Oracle / Excel / Word</p>
      </section>
  
      <!-- 5. 在庫管理システム（非互換調査） -->
      <section class="work">
        <h2>⑤ 在庫管理システム（非互換調査・検証）</h2>
        <ul>
          <li>帳票の非互換検証、SQL調査、Javaソース解析</li>
          <li>JP1でジョブ実行、テストケース作成</li>
        </ul>
        <p class="tech">使用技術：Java / Oracle / JP1 / Excel</p>
      </section>
  
      <!-- 6. 車両運用管理システム（総合試験） -->
      <section class="work">
        <h2>⑥ 車両運用管理システム（総合試験）</h2>
        <ul>
          <li>操作性テスト、エビデンス作成、クロスチェック</li>
          <li>PDF出力ファイルのバイナリ確認</li>
        </ul>
        <p class="tech">使用技術：Excel / Word / TeraTerm / WinMerge</p>
      </section>
  
      <!-- 7. サーバーログ監視設定 -->
      <section class="work">
        <h2>⑦ サーバーログ監視設定</h2>
        <ul>
          <li>WebSAM System Manager でログ監視設定</li>
          <li>JP1でジョブ設定、ServiceNowで申請処理</li>
        </ul>
        <p class="tech">使用技術：WebSAM / JP1 / ServiceNow</p>
      </section>
  
    </div>
  </template>
  
  <style scoped>
  .works-page {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
  }
  .intro {
    margin-bottom: 20px;
  }
  .work {
    margin-bottom: 30px;
    padding: 15px;
    border-left: 4px solid #4fc3f7;
    background: #f7f9fa;
  }
  .tech {
    margin-top: 10px;
    font-style: italic;
    color: #555;
  }
  </style>
  