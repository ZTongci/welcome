import styled from "styled-components";





export const Content = styled.div`
    position: relative;
    top: 100px;
    -webkit-box-sizing: border-box;
    -mozbox-sizing: border-box;
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 0.85);
    box-shadow: 1px 1px 5px gray;
    padding: 50px;
    font-family: "Lato", sans-serif;
    margin-bottom: 150px;
    border-radius:30px;
`

export const PostPreView = styled.div`
    a {
        color: #212529;
    }
    a:hover {
        text-decoration: none;
        color: #0085A1;
      }
    .post-title {
        font-size: 1.875rem;
        margin-top: 1.875rem;
        margin-bottom: 0.625rem;
    }
    .post-subtitle {
        font-weight: 300;
        margin-bottom: 0.625rem;
      }
    .post-meta {
        font-size: 1.125rem;
        font-style: italic;
        margin-top: 0;
        color: #6c757d;
    }
    .post-meta > a {
        text-decoration: none;
      }
    @media (min-width: 992px) {
        a > .post-title {
            font-size: 2.25rem;
        }
    }
`