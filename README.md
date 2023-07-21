# 图灵 2023 级学长组资料汇总网站

> **Warning** 正在建设中

## 本地构建

- 安装 mkdocs 及 material 主题
    ```sh
    $ pip install mkdocs
    $ pip install mkdocs-material  # 新版应该没问题了（？
    $ pip install mkdocs-encryptcontent-plugin
    ```
- 开启本地预览服务
    ```sh
    $ mkdocs serve # serve at localhost:8000
    ```

## 修改发布

不需要 build 之类的，修改好直接通过 git 更新到这个 repo 里，然后自动部署到服务器上