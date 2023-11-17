---
# layout: post
# top: 6
title: "git命令备忘笔记"
date: 2022-01-09 20:28:00+08:00
cover: ./cover/git命令备忘笔记.jpg
coverWidth: 1915
coverHeight: 895
tag: [笔记,git]
category: 工具
# ---article: false--- # 在主页中隐藏
---



# git命令备忘笔记

![](./cover/git命令备忘笔记.jpg)

## 目录

- [git命令备忘笔记](#git命令备忘笔记)
  - [目录](#目录)
  - [git用户配置](#git用户配置)
  - [编辑git配置文件](#编辑git配置文件)
  - [查看配置信息](#查看配置信息)
  - [git默认编辑器配置](#git默认编辑器配置)
  - [git默认差异分析工具配置](#git默认差异分析工具配置)
  - [基本操作](#基本操作)
  - [有关创建与提交你的项目的快照的命令](#有关创建与提交你的项目的快照的命令)
  - [git-查看提交历史](#git-查看提交历史)
  - [远程操作](#远程操作)
  - [git分支管理](#git分支管理)
  - [git 标签](#git-标签)
  - [ssh加密通信配置](#ssh加密通信配置)
  - [windows-git工具打开后自动测试](#windows-git工具打开后自动测试)
  - [将已经提交到远程仓库的版本撤销](#将已经提交到远程仓库的版本撤销)
  - [子仓库](#子仓库)
    - [包含子仓库](#包含子仓库)
    - [从远端克隆父仓库后子仓库为默认为空，需执行以下操作来下载子仓库](#从远端克隆父仓库后子仓库为默认为空需执行以下操作来下载子仓库)
    - [删除误添加到暂存区的子仓库](#删除误添加到暂存区的子仓库)
  - [提交信息为当前日期](#提交信息为当前日期)

## git用户配置

- `git config --global user.name "YiguiDing"`

- `git config --global user.email 2449695354@qq.com`
- `--global` 意味着配置文件写入进当前用户的家目录的全局配置文件
- 去掉该选项意味着配置文件写入当前项目的`.git/config`文件文件

## 编辑git配置文件

- `git config -e`    # 针对当前仓库

- `git config -e --global` # 针对系统上所有仓库

## 查看配置信息

- `git config --list`

- 输出信息中重复的变量名代表来自不同的文件如
  - 系统配置文件 `/etc/gitconfig`
  - 全局配置文件 `~/.config`
  - 项目配置文件 `./.git/config`
- 查询单个配置变量 `git config user.name`

## git默认编辑器配置

- `git config --global core.editor vim`

- 一般为vi vim 或特殊配置为Emacs

## git默认差异分析工具配置

- `git config --global merge.tool vimdiff`

- Git 可以理解 kdiff3，tkdiff，meld，xxdiff，emerge，vimdiff，gvimdiff，ecmerge，和 opendiff 等合并工具的输出信息。

## 基本操作

- 将当前所在目录初始化为git仓库: `git init`

- 将XXX目录初始化为git仓库: `git init XXX`
- 告诉Git开始对这些文件进行跟踪: `git add 文件名`
- 提交：`git commit -m "提交消息"`
  - linux系统中提交用单引号，win用双引号
- 推送到远程仓库：`git push origin master`
- 克隆远程仓库 `git clone 仓库地址 [指定目录]`

## 有关创建与提交你的项目的快照的命令

- `git add`    添加文件到暂存区
  - `git add 文件名1 文件名2 文件名3`
  - `git add 文件夹名`
  - `git add .`当前所在文件夹

- `git status` 查看仓库当前的状态，显示有变更的文件。
  - `-s`参数来获得简短的输出结果
  - `红色??` 表示该文夹没有被追踪（添加到缓存区）
  - `绿色A`  表示该文件已被追踪（添加到缓存区）
  - `绿A红M`    表示该文件添加到缓存之后又有改动。
- `git diff`     比较文件的不同，即暂存区和工作区的差异。
  - 尚未缓存的改动：`git diff`
  - 查看已缓存的改动： `git diff --cached`
  - 查看已缓存的与未缓存的所有改动：`git diff HEAD`
  - 显示摘要而非整个diff：`git diff --stat`
  - 显示暂存区和工作区的差异: `git diff [file]`
  - 显示暂存区和上一次提交(commit)的差异:
    - `git diff --cached [file]`
    - `git diff --staged [file]`
  - 显示两次提交之间的差异:
    - `git diff [first-branch]...[second-branch]`
- `git commit` 提交暂存区到本地仓库。
  - 提交暂存区所有内容：`git commit -m [message]`
  - 提交暂存区指定内容：`git commit [file1] [file2] ... -m [message]`
  - `git -am "修改了123.txt文件"`
    - `-a`意味着可以跳过`git add 123.txt`步骤，直接提交
*`git reset`     回退版本。
  - `git reset [--soft | --mixed | --hard] [HEAD]`
  - `--soft` 工作区和暂存区内容保持不变，本地仓库回退一个版本
  - `--mixed`为默认，工作区保持不变,暂存区内容回退到上一次提交版本
  - `--hard` 工作区和暂存区内容都回退到上一次提交版本
- `git rm`     删除工作区文件。
  - 将文件从暂存区和工作区中删除(该文件提交到暂存区后未被修改)：`git rm fileName.txt`
  - 强行从暂存区和工作区中删除一个文件(该文件提交到暂存区后又被修改)：`git rm -f fileName.txt`
  - 将文件从暂存区删除，但在工作区中保留：`git rm --cached fileName.txt`
  - 进入某个目录中，递归删除该目录下的所有文件和子目录： `git rm –r *`
- `git mv`     移动或重命名工作区文件。
  - 移动或重命名：`git mv [file] [newfile]`
  - 强制移动并覆盖：`git mv -f [file] [newfile]`

## git-查看提交历史

- `git log` - 查看历史提交记录。
  - `-6` 指定列出条数
  - `--oneline` 选项来查看历史记录的简洁的版本
  - `--all` 查看所有分支的提交历史
  - `--graph` 选项，查看历史中什么时候出现了分支、合并。
  - `--no-merges` 选项以隐藏合并提交记录
  - `--reverse` 参数来逆向显示所有日志
  - `--author=YiguiDing` 查找指定用户的提交日志
  - `--after` `--since`指定日期之后，使用格式：`--after={2010-04-18}`
  - `--before` `--until`指定日期之前，使用格式：`--before={3.weeks.ago}`

- `git blame file` - 以列表形式查看指定文件的历史修改记录。

## 远程操作

- `git remote` 远程仓库操作
  - `git remote show [remote]` 显示某个远程仓库详细信息
  - `git remote add [shortName] [url]` 为一个远程库取一个**简短名**
  - `git remote rm shortName`  # 删除远程仓库**简短名**
  - `git remote reName old_shortName new_shortName`  # 修改仓库**简短名**
  - `-v` 列举当前仓库remote远程仓库**简短名**和**实际地址**之间的对应关系

- `git fetch`   从远程获取代码库
  - `git fetch origin` 从远程获取代码库但不合并到当前分支
  - `git merge origin/master` 将远程代码的主分支合并到当前分支
- `git pull`    下载远程代码并合并
  - 其实就是 `git fetch` 和 `git merge local_master` 的简写
  - `git pull <远程主机名> <远程分支名>:<本地分支名>`
  - `git pull origin master:brantest`将远程主机 origin 的 master 分支拉取过来，与本地的 brantest 分支合并。
  - `git pull origin master`与当前分支合并,冒号后面的部分可以省略。
- `git push`    上传远程代码并合并
  - `git push <远程主机名> <本地分支名>:<远程分支名>`
  - `git push <远程主机名> <本地分支名>` 如果远程分支名与本地分支名相同，则可以省略冒号`:`及其之后内容

## git分支管理

- `git branch`列出分支

- `git branch newBranchName`创建一个分支
  - `-b` 创建分支后立马切换
  - `-d` 删除分支
- `git checkout newBranchName`切换到新创建的分支
- 分支切换时，如果工作区内容的全部提交，工作区的全部内容会变成新分支的内容，否则未提交的内容会带新分支去
- `git merge branchA` 将分支branchA合并到当前分支中去
  - 合并完成后可以删除branchA分支
  - 当两个分支内容存在冲突时，合并的操作步骤：
    1. 执行合并操作
    1. 提示有文件存在冲突
    1. 手动编辑那些已经合并但存在冲突的文件，删除冲突代码
    1. 执行`git add 文件名` 用用于告诉Git 文件冲突已经解决
    1. 不带参数的执行`git commit`
    1. 成功合并后git将会做出提示

## git 标签

- `git tag` 默认为给最新一次提交（HEAD）打上标签

- `git tag 3e92c19` 给3e92c19(commit id)打上标签
- `-m` 指定标签信息注解内容,示例`git tag -a <tagname> -m "runoob.com标签"`
- `-a` (annotated)选项意为"创建一个带注解的标签" 会记录这标签是啥时候打的，谁打的，
- `-s` (signed)如果有私钥,可用GPG签署标签,示例：`git tag -s 标签名 -m '标签说明'`
- `-d` 删除标签 `git tag -d 标签名`
- `git show 标签名` 查看标签信息
- `git tag` 查看所有标签
- `git log --decorate` ，也可以看到打的标签

## ssh加密通信配置

- 配置成功后可以免密码向远程仓库推送
  - 使用格式大致为`git push git@github.com:username/pathToProgectName.git localBranchName:remoteBranchName`

1. 生成 SSH密钥 `ssh-keygen -t rsa -C "youremail@example.com"`
    - 将生成两个文件 公钥 `~/.ssh/id_rsa.pub` 和 私钥`~/.ssh/id_rsa`
        - 其中.ssh目录的权限最高允许为755，最低允许为700，也就是说属主用户的权限为rwx,其他用户不能拥有w权限
        - 私钥的权限必须为600
        - 公钥的权限一般为644,最低应该是600
        - `authoried_keys`权限一般为644，最低应该是600
1. 将生成的SSH公钥附加到服务端的authoried_keys记录文件中
    - 先在客户端将文件拷贝到服务端`scp ~/.ssh/id_rsa.pub root@域名或IP:~/.ssh/authorized_keys`
    - scp使用SSH方式登录，会要求输入密码
1. 再在服务端执行附加命令`cat id_rsa.pub >> authorized_keys`
1. 确保服务端的SSH配置`/etc/ssh/sshd_config`文件中有：
    - `RSAAuthentication yes`
    - `PubkeyAuthentication yes`
    - 其他无关紧要的配置
      - `PermitRootLogin yes`
      - `PasswordAuthentication no`
    - 如有不同需要修改,然后重启服务`service sshd restart`
1. 客户端SSH配置示例`/etc/ssh/ssh_config`

```
Host *
  IdentityFile ~/.ssh/id_rsa
Host github.com
  IdentityFile ~/.ssh/id_rsa
Host gitee.com
  IdentityFile ~/.ssh/id_rsa
```

## windows-git工具打开后自动测试

附加两行内容到`/etc/profile`或`~/.profile`文件中

- `ssh git@github.com`
- `ssh git@gitee.com
`

## 将已经提交到远程仓库的版本撤销

- `git log --oneline` 找出上一次提交版本的commitID

- `git reset --mixed xxxx` 将缓存区恢复成该commitID
- `git add .` 重新将工作区文件添加到缓存区
- `git commit -m "xxxxxxx"` 提交到本地仓库
- `git push origin master --force` 强制推送到远程仓库

## 子仓库

### 包含子仓库

- 格式：`git submodule add "url" "add_To_path"`
  - `git submodule add git@github.com:YiguiDing/js_russuaGame.git`
  - `git submodule add git@github.com:YiguiDing/js_russuaGame.git ./js_russuaGame`

### 从远端克隆父仓库后子仓库为默认为空，需执行以下操作来下载子仓库

- `git submodule init`

- `git submodule update`

### 删除误添加到暂存区的子仓库

- `git rm --cached html-js_russiaGame`

## 提交信息为当前日期

- `git commit -m "$(date)"`

- **$(command)** 与 **\`command\`**
  - linux中**echo $(date)** 和 **echo \`date\`** 的作用是将date命令的结果用echo输出
  - 在Windows的git工具中两种都能使用（类似Linux环境）
  - 但是在powerShell中只有第一种能使用
