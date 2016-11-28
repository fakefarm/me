# Tools of the trade

My first exposure to text editors was Word. I used Word to write papers in college. The only goals were to bold, bullet, and print with page numbers. During college one of my Summer jobs was working on a construction crew. I stumbled into the job because my next door neighbor had a crew. Every day I was tasked with bringing out the tools for us to work on our job. As a software developer it is actually very similar. You need to be able to carry tools along your career. At first, your code is not that sophisticated so the tools do not need to be either. Also, since you are new to the field you are happy with starting over with each new job. Something like a new mac book with a new copy of a text editor like Sublime. But now that I'm well into my 4th job and 4th laptop I've seen that my tools, preferences are becoming burdensome to start from scratch every time. The solution is to learn how to carry tools from site to site (pun!) without a big hassle. The goal is to know how your tools and how to carry them.

As such, I'm writing this out to explain what tools are needed and why. Tools will help you get your job done quicker and easier than without. So as such, there should be some pain when you are without your tools - because you know what it's like to work with tools.

## main tools;

- computer / linux
- terminal / bash
- iterm
- vim
- git
- tmux
- homesick
- application management
- homebrew to install apps (from andy holeman)

## Text Editor

A text editor is the very tool that transfers your fingers to keyboard to text to words to code to ideas. If you are writing a document then you want an editor that will help you with spell check, bold, bullets, and autosave. But when text is the putty you work with to craft then you need some more powerful features. There comes a point in every developers career when they reach a crossroads. Are they going to be develoeper or are they simply passing through before they get promoted. Vim is for developers who plan to stick around.

The following list are activities that professional programmers do on a daily basis. Not every develoer uses these, but this list is [matt]() dot files and he is as passionate as they come about keeping these things in check.

Matt is a full stack, front end focused, rails developer. If that sounds like you then chances are you will do many of these tasks. Each of the following items descrbies a solution, a description, and a specific plugin that will help you solve it.

My path to vim was from TextMate, Sublime, Atom, Vim. Vim is so underwealming and odd at first introduction you will most likely find it repelling. But the truth is that it is a tool to be crafted to your trade. I had several people dissuade me along the way of learning vim by saying it was a long time to setup.It takes a long time because it will fit you like your favorite pair of sandals and mold to your feet so much so that any other text device will annoy you with its lack of speed. But you need someone to guide you. Not only do you need videos, you need a vimmentor.

## snippets (save time with boilerplate code)

### Plug 'SirVer/ultisnips'

Snippets give you placeholders for boilerplate code. So you don't have to type rigger by default is whatever the snippet is and it is file smart. You can get snippets that work on exisiting text. First off you have to remember it or copy paste. for the common tasks. Conditionals. so you work in the

## git context

### Plug 'airblade/vim-gitgutter'

Git is our version control and is not only used for code. this is a visual indicator to highlight what you worked on since your last change.

## color scheme

### Plug 'altercation/vim-colors-solarized'

Programmers have been spoiled with color. Colors help break up the monotony and let you focus on a particular concept in the text.

## fuzzy finder

### Plug 'junegunn/fzf', { 'dir': '~/.fzf', 'do': './install --all' }

### Plug 'junegunn/fzf.vim'

a fuzzy finder for finding files. also has a command line counter part in the command line.

## HTML shorthand

### Plug 'mattn/emmet-vim'

For frontend developers we need to work on HTML. But we don't write all the HTML out, we use a tool like Emmet.

## keeping syntax clean

### Plug 'scrooloose/syntastic'

Writing code means having syntax. semi-colons, parens, etc. No need to have mental ram for basic typos and such. for catching linting feedback for syntax when you save. this plug in will help you with errors.

## style guide helping

### Plug 'sheerun/vim-polyglot'

nice bundle of syntax files so rather than getting a b

## comment management

### Plug 'tpope/vim-commentary'

key binding for commenting stuff

## don't type the defaults

### Plug 'tpope/vim-endwise'

aytomatically ends closing context - end, closing brackets, and other computer-y items

## git help

### Plug 'tpope/vim-fugitive'

complex wrapper around `git blame`. watch vimcasts. helps you manage diffing.

## keep your place even when you turn it all off.

### Plug 'tpope/vim-obsession'

keeps the window state when you quit your vm.

## split windows and have multiple processes.

### tmux

(I think that's the reason)

## thing

### Plug 'tpope/vim-rails'

## thing

### Plug 'tpope/vim-repeat'

utility so certain plugins support repeat they can be so with '.'

## close other side.

### Plug 'tpope/vim-surround'

lets you surround type things with 'single quotes' to double

## jump around text

### Plug 'tpope/vim-unimpaired'

quick things to jump around the text. also helps with copy pasting

## directory management

### Plug 'tpope/vim-vinegar'

cleans up netrw and adds bindings

## status bar management

### Plug 'vim-airline/vim-airline'

bar down at the bottom

## you look at the status bar all day. style it up!

### Plug 'vim-airline/vim-airline-themes'

## parens management (help with CIW)

### Plug 'wellle/targets.vim'

helps you get inside to parens without needing to be there.

## searching

### Plug 'wincent/ferret'

gives all matches throughout project in a quick list and add this plus

<close bracket=""> q</close>

## cleaning up vertical content

### tabular (by kris)

## strip trailing whitespace

## setup leader

## keyboard shortcuts (mappings)

### switch tabs with a shortcut.

### working with a vm for copy/pasting

### working with rails

### customizing plugins
