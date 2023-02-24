---
title: 'Markdown Test'
date: '2023-02-21 20:22'
update: '2023-02-23 21:26'
description: 'Markdown-itを使って文字をハイライト。'
image:
tag: [test, markdown]
---

[[toc]]

# マークダウンをもっとカスタマイズ

::: info
here be info
:::

::: success
here be success
:::

::: warning
here be dragons
:::

::: danger
here be danger
:::

```javascript
console.log('test');

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
```

```
zanasldghjalshgheihkl
```

```
import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
```

```
<div>
  <p>適当なhtml</p>
</div>
```


❤️🤷‍♂️😂😂🤣😍😒👌😘💕😁👍🙌🤦‍♀️🤦‍♂️🤷‍♀️✌️🤞😉😎🎶😢💖😜🤷‍♂️❤️😊😂🤣😍😒👌😘💕😁👍🙌🤦‍♀️🤦‍♂️🤷‍♀️✌️🤞😉😎🎶😢💖😜

↑環境依存文字☀

## こんにちは。

<p>直でHTMLを書いている!</p>

## ヘッダー

# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

## 強調されたテキスト
_テキストを強調(em)する_
**adfa**

## 打ち消し線
~~打ち消し線~~

## 強い重要性
__強い重要性(strong)__

## 強調かつ強い重要性
___強調かつ強い重要性___

## リンク
### 名前付きリンク
[google](https://www.google.com/)
[home]()
[home](/)
[post](post)
[post](/post)

## テーブル
テーブルヘッダー1  | テーブルヘッダー2
------------- | -------------
テーブルコンテンツ1-1  | テーブルコンテンツ2-1
テーブルコンテンツ1-2  | テーブルコンテンツ2-2

## テーブル2
|   Markdown   | Rendered HTML |
|--------------|---------------|
|    *Italic*  | *Italic*      |
|              |               |
|    - Item 1  | - Item 1      |
|    - Item 2  | - Item 2      |
|    ```python | ```python     |
|    .1 + .2   | .1 + .2       |
|    ```       | ```           |

## テーブル3
|             |          Grouping            |
|First Header | Second Header | Third Header |
| ----------- | :-----------: | -----------: |
|Content      |          *Long Cell*         |
|Content      |   **Cell**    |         Cell |

|New section   |     More      |        Data |
|And more      | With an escaped '\\|'       |
[Prototype table]

## テーブル4
|--|--|--|--|--|--|--|--|
|♜|  |♝|♛|♚|♝|♞|♜|
|  |♟|♟|♟|  |♟|♟|♟|
|♟|  |♞|  |  |  |  |  |
|  |♗|  |  |♟|  |  |  |
|  |  |  |  |♙|  |  |  |
|  |  |  |  |  |♘|  |  |
|♙|♙|♙|♙|  |♙|♙|♙|
|♖|♘|♗|♕|♔|  |  |♖|

## リスト
### 順序なしリスト
* 箇条書き1
  * 入れ子
    * 入れ子の入れ子
* 箇条書き2

### 順序付きリスト
<!-- 順序付きリストは入れ子にならなそう -->
1. 順序付き箇条書き1
  1. 入れ子1
  2. 入れ子2
2. 順序付き箇条書き2

## 引用
> 引用
>> 入れ子の引用

## 画像
![画像の代替テキスト](http://localhost:3000/images/testimg.png "画像タイトル")

## 水平線
---

## URL
https://www.google.com/

## コード
<!-- 実際は半角スペース4つ不要 -->

``` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## 絵文字
:smile:

## 注釈
注釈1へのリンク[^first].

[^first]: 注釈1 **注釈もマークアップできる**

## テキストのハイライト
==ハイライト==

## チェックリスト
- [ ] 牛乳を買う
- [x] パンを買う

1. [x] パンを買う
2. [ ] 牛乳を買う


[X] こんにちは


## 説明リスト
名前 1

:   定義1
定義1の改行

: ていぎ
あああ

名前2 *名前のマークアッップ*

:   定義2

## ワーニング
::: warning
これは注意文言です
:::
