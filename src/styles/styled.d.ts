// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    color:{
      black:string,
      yellow:string,
      green:string,
      greenHover:string,
      blue:string,
      red:string
  }
  }
}