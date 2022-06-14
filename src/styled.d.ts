//스타일 컴포넌트를 TS에서 사용시 styled.d.ts를 만들어줘야함.

// default로 declair되어있는 파일들을 재설정하는 파일임.
// TypeScript의 타입 선언 파일로서 TypeScript코드의 타입추론을 돕는 파일.

import styled from "styled-components";

/*여기서 declare module을 styled-components에 사용하면, 
 styled-components에서 아래 선언한 DefaultTheme이라는 
 인터페이스를 import할 수 있음.*/
declare module "styled-components" {
    export interface DefaultTheme {
        textColor: string;
        bgColor: string;
        accentColor: string;
        cardBgColor: string;
    }
}

//해당 Interface는 다른 파일에서 Import해서 선언 가능.
//theme.ts에서 import한 뒤, 사용할 예정.
