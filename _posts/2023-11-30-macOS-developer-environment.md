---
title: macOS developer environment 
author: Lennard Wolf
layout: post
icon: apple
---
### brew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
<!--more-->
#### brew packages

```bash
brew install \
    asciinema \
    font-hack-nerd-font \
    gh \
    git-delta \
    htop \
    jesseduffield/lazydocker/lazydocker \
    muesli/homebrew-tap/duf \
    jq \
    lsd \
    nano \
    nanorc \
    openssh \
    pandoc \
    pre-commit \
    rclone \
    rsync \
    selecta \
    sshfs \
    tmux \
    tree \
    wget \
    zsh \
    zsh-completions \

brew install --cask osxfuse dozer

```
#### oh-my-zsh

```bash
cd ~/.oh-my-zsh/custom/plugins/
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git
git clone https://github.com/zsh-users/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-completions
#### ruby

```bash
$ brew install rbenv ruby
ruby -e 'puts Gem.user_dir'
/Users/my_user/.gem/ruby/3.2.0

$ which ruby
/usr/local/opt/ruby/bin/ruby

$ /usr/bin/ruby -v
ruby 2.6.10p210 (2022-04-12 revision 67958) [universal.x86_64-darwin21]

$ ruby -v
ruby 3.2.2 (2023-03-30 revision e51014f9c0) [x86_64-darwin21]
```

#### rust

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
cargo add self_update
cargo install sccache
cargo install illa du-dust exa bat broot
cargo install bottom --locked
```


```

#### super optional

##### fonts & icons

```bash
brew tap shaunsingh/SFMono-Nerd-Font-Ligaturized
brew install --cask font-sf-mono-nerd-font-ligaturized
brew install hicolor-icon-theme
wget https://github.com/ryanoasis/nerd-fonts/releases/download/v3.1.1/Hack.zip ~/Downloads/Hack.zip
```

```bash
brew install orbstack glances
```
