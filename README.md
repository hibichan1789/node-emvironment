# typescriptの文法練習
## 初期環境のためのコマンド
npm init -y  node.jsプロジェクトとして初期化するコマンド  
npm install -D typescript tsx  ライブラリのインストール  
npx tsc --init  校閲ルール  

## 実行コマンド
npx tsx (ファイル名.ts)

## 学んだこと
Exhaustiveness Check（網羅性チェック）  
以下のようにswitch分のdefaultにnever型を入れ込むことで新しいcaseの書き忘れを防げる  
新しいdefaultに到達する型があればエラーを出す→caseの書き忘れを防げる　　
switch(shape.kind){  
        case "circle":  
            return shape.radius**2 * Math.PI;  
        case "square":  
            return shape.sideLength**2;  
        case "rectangle":  
            return shape.width * shape.height;  
        default:  
            const _exhaustiveCheck:never = shape;   
            return _exhaustiveCheck;  
    }  

Mapオブジェクトのキーと値を同時に参照するには以下のようにするとよい  
for (const [key, value] of map)  

type のほうが interfaceよりも柔軟に型の分岐とかがしやすい印象  