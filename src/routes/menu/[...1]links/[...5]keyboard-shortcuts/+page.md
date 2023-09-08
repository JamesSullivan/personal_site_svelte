---
title: "Keyboard Shortcuts"
description: A placeholder for useful OS, VS Code and other keyboard shortcuts
---

<script>
        import { Chip } from '@svelteness/kit-docs';
</script>
# {$frontmatter.title}

{$frontmatter.description}

<table style="display: table; width: 100%;">
    <thead>
    <tr>
        <th><a href="https://help.gnome.org/users/gnome-help/stable/shell-keyboard-shortcuts.html.en"><b>Gnome</b></a>/<a href="https://www.customguide.com/cheat-sheet/windows-11-quick-reference.pdf"><span style="color:Blue;font-weight: bold;">Windows 11</span></a></th>
        <th><a href="https://www.minitool.com/news/keyboard-shortcuts-for-all-web-browsers.html" style="font-weight: bold;">Web Browser</a></th>
    </tr>
    </thead>
    <tbody style="width: 100%;">
    <tr>
        <td><Chip>Alt+F6</Chip> - Switch Windows of same app <Chip>⌘+</Chip><br>
<Chip>Alt+Esc</Chip> - Cycle through Windows (current WS no HUD)<br>
<Chip>⌘+Tab</Chip><Chip><span style="color:Blue;">⌘+Tab</span></Chip> - Cycle through Windows (All WSs with HUD)<br>
<Chip>⌘+Page Up/Down</Chip> <Chip><span style="color:Blue;">Ctrl+⌘+←/→</span></Chip> - activate left/right workspace &nbsp;<br>
<Chip>⇧+⌘+PageDown</Chip> - move window to right workspace<br>
<Chip>⇧+⌘+←/→</Chip> - Move window one monitor to left/right.<br>
<Chip>Ctrl+PageDown</Chip> - Move to tab to the right<br>
<Chip>F10</Chip> - Open first menu of app (usually File)<br>
<Chip>⇧+F10</Chip> - Right mouse click contextual menu<br>
<Chip>⇧+Ctrl+N</Chip> - Create new folder (Nautilus)<br>
<Chip>Alt+￪/￬</Chip> - Enter parent/child directory (Nautilus)<br>
<Chip>⌘+v</Chip> - Show clipboard history (custom GPaste)<br>
<Chip><span style="color:Blue;">⌘+z</span></Chip> - <span style="color:Blue;">Windows 11 Snap Layouts</span><br>
<Chip><span style="color:Blue;">Ctrl+⌘+d</span></Chip> - <span style="color:Blue;">Add a virtual workspace</span><br>
</td><td>
<Chip>Ctrl+Tab</Chip> - Switch to the next tab<br>
<Chip>Alt/<span style="color:Blue;">Ctrl</span>+1..9</Chip> - Locate to tab ...<br>
<Chip>Ctrl+d</Chip> - Bookmark the current tab<br>
<Chip>⇧+Ctrl+d</Chip> - Bookmark all open tabs<br>
<Chip>Ctrl+g</Chip> - Find next after find (`F3`)<br>
<Chip>⇧+Ctrl+g</Chip> - Find previous (after find)<br>
<Chip>Ctrl+Alt+h</Chip> - Open LastPass (custom key binding)<br>
<Chip>Ctrl+k</Chip> - Focus built in web search<br>
<Chip>Ctrl+u</Chip> - open source code for page in new tab<br>
<Chip>Middle click tab</Chip> - Close tab<br>
<Chip>Middle click page</Chip> - Open link in new background tab<br>
<Chip>⇧+Middle click page</Chip> - Open link in new foreground tab<br>
<Chip>F6</Chip> - Move to next frame<br>
<Chip>F7</Chip> - Caret browsing<br>
<Chip>⇧+Ctrl+N</Chip> - Undo close window (FF) or private (Chrome)<br>
</td>
    </tr>
</tbody>
</table>

<br>  
<table>
<thead>
    <tr>
        <th><a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf" style="font-weight:bold;">VS Code</a></th>
        <th></th>
    </tr>
</thead>
<tbody style="width: 100%;">
    <tr>
        <td><Chip>Alt-Click</Chip> - Add another cursor<br>
<Chip>Select+Ctrl+d</Chip> - add multi-cursor at next instance as well&nbsp;<br>
<Chip>Alt+￪</Chip> - Move current line up one line<br>
<Chip>⇧+Alt</Chip> - box selection of text<br>
<Chip>⇧+Alt+￪</Chip> - Extend Cursor upwards<br>
<Chip>⇧+Alt+→</Chip> - Extend selection horizontally<br>
<Chip>F2</Chip> - rename all instances of a variable or function<br>
<Chip>F12</Chip> - go to definition<br>
<Chip>Ctrl+[</Chip> - shift selection left or Ctrl+] right<br>
<Chip>Ctrl+b</Chip> - toggle side panel<br>
<Chip>Ctrl+d</Chip> - go to next after find/current  selection<br>
<Chip>Ctrl+g</Chip> - go to line<br>
<Chip>Ctrl+j</Chip> - toggle focus between editor/terminal<br>
<Chip>Ctrl+l</Chip> - select line (can be repeated to select following)<br>
</td>
        <td><Chip>Ctrl+p</Chip> - search files<br>
<Chip>Ctrl+x</Chip> - with nothing selected cuts the entire line<br>
<Chip>Ctrl+/</Chip> - comment code (works on Jupyter also)<br>
<Chip>Ctrl+\</Chip> - split editor<br>
<Chip>Ctrl+Alt+n</Chip> - run current file (see code-runner settings)<br>
<Chip>⇧+Ctrl+Alt+￬</Chip> - Copy line down<br>
<Chip>⇧+Ctrl+i</Chip> - format code<br>
<Chip>⇧+Ctrl+l</Chip> - rename all similar text<br>
<Chip>Ctrl+k s</Chip> - save all<br>
<Chip>Ctrl+k Ctrl+s</Chip> - keyboard shortcuts<br>
<Chip>⇧+Ctrl+o</Chip> - find by code<br>
<Chip>⇧+Ctrl+v</Chip> - preview (markdown)<br>
<Chip>Ctrl+Enter</Chip> - move cursor to new line below<br>
<Chip>New file ! then tab</Chip> - creates html template<br>
</td>
    </tr>
</tbody>
</table>

<br>

<a href="https://code.visualstudio.com/docs/python/jupyter-support-py#_additional-commands-and-keyboard-shortcuts" style="font-weight:bold;">Jupyter (in VS Code)</a>

<Chip>esc</Chip> - command mode j/k down/up  m/y markdown/code<br>
<Chip>enter</Chip> - edit mode in cell from command mode<br>
<Chip>Ctrl+Enter</Chip> - to run the current cell<br>
<Chip>⇧+Enter</Chip> - run the current cell and advance to the next.<br>







