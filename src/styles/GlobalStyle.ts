import { createGlobalStyle} from 'styled-components'

// CSS RESET

export const GloblaStyle = createGlobalStyle`
:root{
    font-size: 62.5%;
}

* {
    margin: 0;
    padding: 0;
    border: none;
    text-decoration: none;
    list-style-type: none;
    box-sizing: border-box;
    outline: none;
    /* color: white; */
    font-family: 'Roboto', sans-serif;
}
body{
    font-size: 1.4rem;
    background-color: black;
}

#root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    
}

.flex-center{
  display: flex;
  align-items: center;
  justify-content: center;
}

@media(min-width:600px){
    :root{
        font-size: 18px;
    }
}

`