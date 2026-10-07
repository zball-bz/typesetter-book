# Typesetter 使用手册

[Typesetter](https://github.com/zball-bz/Typesetter) 的标记语言 `.tsm` 的使用手册，写成一本 Typesetter 书：
一个工程（`tsm.project.json`），每章一个 `.tsm` 文件。发布在 <https://zball.io/books/typesetter/>。

- 章节平铺在仓库根目录，文件名就是 URL 的一段（`syntax.tsm` → `/books/typesetter/syntax`）；
  资源（`data/`、`lib/`）一律用相对路径引用。
- 编号跨章连续，引用跨章解析，都由引擎完成；站点（zball.io）只把工程渲染成页面。
- 预览：用 VS Code 的 Typesetter 插件打开任一章；或者在 zball.io 仓库里
  `ZB_BOOK_typesetter=<本仓库路径> npx @11ty/eleventy --serve`。
- 发布：在 zball.io 仓库更新 `books/typesetter` 子模块指针并推送（或在其 Actions 里运行 `book-update`）。

## 来源

- 《实例：HoTT Book · Introduction》（`example-hott.tsm`）：*Homotopy Type Theory: Univalent Foundations of
  Mathematics* 的引言，<https://github.com/HoTT/book>，CC BY-SA 4.0。它对原书其他章节的引用经
  `data/hott-book.labels.json`（原书的部分、章、节及其编号，取自原书源码）解析，链接到原书主页。
  参考文献 `data/hott-refs.json` 取自原书。
- 《实例：活字印刷術》（`example-huozi.tsm`）：维基百科条目“活字印刷術”，CC BY-SA 4.0；图片来自 Wikimedia Commons。
