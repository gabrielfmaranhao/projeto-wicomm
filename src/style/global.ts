import styled,{ createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        --white: #FFFFFF;
        --black-1: #0B0B0B;
        --orange-1: #FF9601;
        --orange-2: #FFC470;
        --dark-1:#1C1C1E;
        --dark-2:#2C2C2E;
        --dark-3:#3A3A3C;
        --gray-1: #9A9A9A;
        --gray-2: #CACACA;
        --gray-3: #F1F1F1;
    }
    html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
html, body, #root{
    width: 100%;
    height: 100%;
}
#arrow_up{
    position: fixed;
    padding: 11px;
    top: 559px;
    left: 1184px;
    img{
        width:32px;
        height:32px;
    }
}
#talk_to_me{
    position: fixed;
    top:625px;
    left:1121px;
    padding: 10px;
}
`
export default GlobalStyle
export const ListButtonBundle = styled.ol`
    position: absolute;
    left: 570px;
    top: 614px;
    display: flex;
    gap: 10px;
`
export const ButtonBundle = styled.button`
    background-color: var(--gray-2);
    border: none;
    width: 40px;
    height: 2px;
    transition: 0.250s;
    :hover{
        height: 6px;
        background-color: var(--orange-1);
    }
`
