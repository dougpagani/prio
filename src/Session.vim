let SessionLoad = 1
if &cp | set nocp | endif
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/Projects/prio/src
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
argglobal
%argdel
$argadd binary-insertion-sort-viz.js
set stal=2
tabnew
tabrewind
edit binary-insertion-sort-viz.js
set splitbelow splitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
balt ~/dotfiles/symlinked/vimdir-pieces/vim-snippets/UltiSnips/javascript.snippets
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
17
normal! zo
50
normal! zo
75
normal! zo
76
normal! zo
80
normal! zo
100
normal! zo
102
normal! zo
106
normal! zo
110
normal! zo
113
normal! zo
117
normal! zo
121
normal! zo
125
normal! zo
128
normal! zo
145
normal! zo
161
normal! zo
162
normal! zo
163
normal! zo
164
normal! zo
166
normal! zo
177
normal! zo
188
normal! zo
208
normal! zo
209
normal! zo
225
normal! zo
92
normal! zo
99
normal! zo
100
normal! zo
102
normal! zo
106
normal! zo
110
normal! zo
113
normal! zo
117
normal! zo
121
normal! zo
125
normal! zo
128
normal! zo
136
normal! zo
144
normal! zo
145
normal! zo
155
normal! zo
160
normal! zo
161
normal! zo
162
normal! zo
163
normal! zo
164
normal! zo
166
normal! zo
176
normal! zo
185
normal! zo
187
normal! zo
188
normal! zo
200
normal! zo
207
normal! zo
208
normal! zo
209
normal! zo
224
normal! zo
225
normal! zo
226
normal! zo
let s:l = 69 - ((25 * winheight(0) + 20) / 40)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 69
normal! 0
lcd ~/Projects/prio/src
tabnext
edit ~/Projects/prio/src/binary-insertion-sort-viz.css
set splitbelow splitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
balt ~/Projects/prio/src/binary-insertion-sort-viz.js
setlocal fdm=marker
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=99
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 40 - ((6 * winheight(0) + 9) / 18)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 40
normal! 019|
lcd ~/Projects/prio/src
tabnext 1
set stal=1
badd +0 ~/Projects/prio/src/binary-insertion-sort-viz.js
badd +8 ~/Projects/prio/src/App.js
badd +10 ~/Projects/prio/src/App.css
badd +51 ~/Projects/prio/notes.txt
badd +0 ~/Projects/prio/src/binary-insertion-sort-viz.css
badd +950 ~/dotfiles/symlinked/vimdir-pieces/vim-snippets/UltiSnips/javascript.snippets
badd +0 ~/AV-CMS/codebase/customer-app/src/App.js
badd +17 ~/dotfiles/symlinked/vimdir-pieces/vim-snippets/UltiSnips/javascript/generic.snippets
badd +0 ~/pup-testing/login-upload-files.js
badd +14 ~/dotfiles/symlinked/vimdir-pieces/vim-snippets/UltiSnips/snippets.snippets
badd +0 ~/dotfiles/symlinked/vimdir-pieces/vim-snippets/UltiSnips/javascript/react.snippets
badd +4 ~/Projects/prio/src/shuffle.js
badd +2 ~/Projects/prio/src/scratch
badd +0 ~/Projects/prio/docs/meta-ideas-for-algo-visualizations.txt
badd +5 ~/Projects/prio/docs/bis-writing-exercise-scratch.txt
badd +1047 ~/.vim/plugged/ultisnips/doc/UltiSnips.txt
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 shortmess=filnxtToOSsc
set winminheight=1 winminwidth=1
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
nohlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
