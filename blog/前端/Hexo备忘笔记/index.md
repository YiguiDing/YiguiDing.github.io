---
title: "Hexo备忘笔记"
date: 2022-02-23 09:50:00+08:00
# cover: ./images/Hexo.jpg
tag: [笔记,Hexo]
# article: false
category: 笔记
---


# Hexo安装使用

![](./images/Hexo.jpg)

Hexo 是一个快速、简洁且高效的博客框架。
Nexmoe是该博客框架的一个主题

1. 创建conda环境（可有可无
    - conda creat --name Hexo
    - conda activate Hexo

1. 安装 Hexo

- 环境安装
  Node.js（包含npm，npx
  Git
- 安装 Hexo
  安装给当前目录的项目：
   npm install hexo
  安装到全局：（如果不想把所有文件防在当前目录）
   npm install -g hexo-cli
  tips：hexo-cli是hexo命令行模式

1. 使用Hexo：
    - npx hexo + 参数
    - hexo + 参数
     - 需将 Hexo 所在的目录下的 node_modules 添加到环境变量：
     - echo 'PATH="$PATH:./node_modules/.bin"' >> ~/.profile

## Hexo常用命令

1. hexo init [folder] 默认在目前的文件夹建立网站
 本命令相当于执行了以下几步：
  Git clone hexo-starter 和 hexo-theme-landscape 主题到当前目录或指定目录。
  使用npm 包管理器下载依赖

1. hexo generate
 使用 Hexo 生成静态文件
1. hexo generate --watch
 监视文件变动并立即重新生成静态文件
1. hexo generate --deploy
1. hexo deploy --generate
 生成完毕后自动部署网站

1. **hexo clean && hexo generate && hexo deploy**
 清除,生成,部署

## 为Hexo安装配置修改Nexmoe主题

- 安装
 npm i hexo-theme-nexmoe
- 安装依赖 WordCount
 npm i --save hexo-wordcount
- 配置 Nexmoe​
 在 Hexo 根目录下修改 _config.nexmoe.yml
- 在本地启动一个 Hexo Server
 hexo s --debug

## 官方文档

- hexo博客框架: <https://hexo.io/zh-cn/docs/index.html>

- Nexmoe主题: <https://docs.nexmoe.com/>
