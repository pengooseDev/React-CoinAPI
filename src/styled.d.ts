//default로 declair되어있는 파일들을 재설정하는 파일임.
//TypeScript의 타입 선언 파일로서 TypeScript코드의 타입추론을 돕는 파일.

import styled from "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        textColor: string;
        bgColor: string;
    }
}
