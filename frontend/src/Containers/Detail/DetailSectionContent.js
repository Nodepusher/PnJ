import React from 'react';
import { TuiViewer } from '../../Modules/ToastUI';

const DetailSectionContent = () => {
    const htmlText = `<h1>Heading 1</h1><h2>Heading 2</h2><h3>Heading 3</h3><h4>Heading 4</h4><h5>Heading 5</h5><h6>Heading 6</h6><p><strong>bold</strong> <em>italic</em> <del>strikethrough</del></p><div contenteditable="false"><hr></div><p>horizontal line</p><div contenteditable="false"><hr></div><blockquote><p>block quote</p><blockquote><p>block quote (2 depth)</p><blockquote><p>block quote (3 depth)</p></blockquote></blockquote></blockquote><ul><li><p>Unordered list</p><ul><li><p>list indented</p></li></ul></li></ul><ol><li><p>ordered list</p></li><li><p>list</p><ol><li><p>ordered list indented</p></li><li><p>indented</p></li></ol></li></ol><ul><li class="task-list-item" data-task="true"><p>task</p></li><li class="task-list-item" data-task="true"><p>list completed</p></li></ul><table><thead><tr><th><p>table</p></th><th><p>head</p></th></tr></thead><tbody><tr><td><p>table</p></td><td><p>body</p></td></tr></tbody></table><p><a href="/">link </a></p><p><code>inline code</code></p><div data-language="text" class="toastui-editor-ww-code-block"><pre><code>code block</code></pre></div><div data-language="text" class="toastui-editor-ww-code-block"><pre><code>console.log("fenced code block");</code></pre></div><div data-language="text" class="toastui-editor-ww-code-block"><pre><code>**HTML block**</code></pre></div>`;

    // 마크다운은 백틱 안의 탭까지 적용되므로 주의할 것
    const markdownText = `
# Heading 1
    
## Heading 2 

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

**bold** *italic* ~~strike~~

***

horizontal line

***

> block quote
> > block quote (2 depth)
> > > block quote (3 depth)

* Unordered list
    * list indented

1. ordered list
2. list
    1. ordered list indented
    2. indented

* [ ] task
* [ ] list completed

| table | head |
| ----- | ---- |
| table | body |

[link ](/)
\`inline code\`
\`\`\`
code block
\`\`\`
    `;
    return (
        <div className="border_secondary mt-[24px] border-t pt-[32px]">
            <div>
                <div className="steadio-post steadio-post-detail copy-disabled">
                    <TuiViewer content={markdownText} />
                </div>
                <div className="h-[32px]"></div>
            </div>
            <div className="flex w-full flex-wrap">
                <button>
                    <li className="h-[30px] mb-[12px] mr-[6px] flex items-center rounded-[4px] bg-[#FAFAFB] pl-[8px] pr-[8px]">
                        <span className="content_primary font_body_regular_md mr-[6px] text-[#666667]">
                            #해시태그 이름
                        </span>
                    </li>
                </button>
            </div>
            <div className="h-[20px]"></div>
        </div>
    );
};

export default DetailSectionContent;
