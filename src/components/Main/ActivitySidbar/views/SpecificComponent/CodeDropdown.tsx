
import { useState, useRef } from "react"

export default function CodeDropdown(props){
    const [selectedOption, setSelectedOption] = useState('Local');
    const [selectedClone, setSelectedClone] = useState('HTTPS');
    const [isCopied, setIsCopied] = useState(false);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    }
    const handleClone= (option) => {
        setSelectedClone(option);
    }

    const textAreaRef = useRef(null);
    const copyToClipboard = async (value) => {
        try {
          if (textAreaRef.current) {
            await navigator.clipboard.writeText(value);
            setIsCopied(true);
            console.log("URL copied to clipboard");
          }
        } catch (err) {
          console.error("Unable to copy to clipboard", err);
        }
    };

    return(
 
        <div className='btn-group'>
            <button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                <span className="me-2">
                    <svg aria-hidden="true" focusable="false" role="img" className="octicon octicon-code" viewBox="0 0 16 16" width="16" height="16" fill="white">
                        <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
                    </svg>
                </span>
                Code
            </button>
            <section className="dropdown-menu dropdown-menu-end menu-occupied-space shadow">
                <div className="d-flex overflow-auto">
                    <div className="mt-0">
                        <a className={`dropdown-item btn ${selectedOption === 'Local' ? 'fw-bold' : 'border-bottom'}`}
                            onClick={()=>{handleOptionClick('Local')}}
                            href="#">Local
                        </a>
                    </div>
                    <div className="mt-0">
                        <a className={`dropdown-item btn ${selectedOption === 'Codespaces' ? 'fw-bold' : 'border-bottom'}`}
                            onClick={()=>{handleOptionClick('Codespaces')}}
                            href="#">Codespaces
                        </a>
                    </div>
                </div>
                <div className="container">
                    {selectedOption === 'Local' && (
                        <div>
                            <div className="d-flex align-items-center justify-content-between py-3">
                                <h5 className="fs-md m-0 fw-bold">
                                    <svg className="me-2 mb-1" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                                        <path d="M0 2.75C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25Zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25ZM7.25 8a.749.749 0 0 1-.22.53l-2.25 2.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L5.44 8 3.72 6.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.25 2.25c.141.14.22.331.22.53Zm1.5 1.5h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5Z"></path>
                                    </svg>
                                    Clone
                                </h5>
                                <a href="https://docs.github.com/articles/which-remote-url-should-i-use" className="" >
                                    <svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.92 6.085h.001a.749.749 0 1 1-1.342-.67c.169-.339.436-.701.849-.977C6.845 4.16 7.369 4 8 4a2.756 2.756 0 0 1 1.637.525c.503.377.863.965.863 1.725 0 .448-.115.83-.329 1.15-.205.307-.47.513-.692.662-.109.072-.22.138-.313.195l-.006.004a6.24 6.24 0 0 0-.26.16.952.952 0 0 0-.276.245.75.75 0 0 1-1.248-.832c.184-.264.42-.489.692-.661.103-.067.207-.132.313-.195l.007-.004c.1-.061.182-.11.258-.161a.969.969 0 0 0 .277-.245C8.96 6.514 9 6.427 9 6.25a.612.612 0 0 0-.262-.525A1.27 1.27 0 0 0 8 5.5c-.369 0-.595.09-.74.187a1.01 1.01 0 0 0-.34.398ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
                                    </svg>
                                </a>
                            </div>
                            <ul className="d-flex list-unstyled gap-3">
                                <li role="button" 
                                    className={`d-inline-flex p-2 fw-bold ${selectedClone === 'HTTPS' ? 'nav-link-active' : 'nav-link '}`}
                                    onClick={()=>{handleClone('HTTPS')}}>HTTPS</li>
                                <li role="button" className={`d-inline-flex p-2 fw-bold ${selectedClone === 'SSH' ? 'nav-link-active' : 'nav-link '}`}
                                    onClick={()=>{handleClone('SSH')}}>SSH</li>
                                <li role="button" className={`d-inline-flex p-2 fw-bold ${selectedClone === 'Github CLI' ? 'nav-link-active' : 'nav-link '}`}
                                    onClick={()=>{handleClone('Github CLI')}}>Github CLI</li>
                            </ul>
                            {selectedClone === 'HTTPS' &&(
                                <div>
                                    <div className="d-flex align-items-center justify-content-between gap-2">
                                        <input 
                                            className="border rounded px-2 py-1 w-100 bg-secondary bg-opacity-10" 
                                            type="text" 
                                            value={props.repo_clone}
                                            ref={textAreaRef}/>
                                    
                                        <span onClick={()=>copyToClipboard(props.repo_clone)}>
                                            {isCopied ? (
                                                <svg
                                                    role="button" 
                                                    aria-hidden="true" 
                                                    viewBox="0 0 16 16" 
                                                    width="16" 
                                                    height="16" fill={isCopied ? "green" : "currentColor"}>
                                                    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                                                </svg>
                                            ) : (
                                                <svg
                                                role="button" 
                                                aria-hidden="true" 
                                                className="octicon" 
                                                viewBox="0 0 16 16" 
                                                width="16" 
                                                height="16" fill={isCopied ? "green" : "currentColor"}>
                                                    <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
                                                    <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
                                                </svg>
                                            )}
                                        </span>
                                    </div>
                                    <p className="py-2 fs-md text-secondary border-bottom">Clone using the web URL.</p>
                         
                                </div>
                            )}
                            {selectedClone === 'SSH' &&(
                                <div>
                                    <div className="fs-md border rounded p-3 my-2 bg-warning bg-opacity-50">You don't have any public SSH keys in your GitHub account. You can 
                                        <a href="/settings/ssh/new" className="ms-1 text-primary">add a new public key</a>, or try cloning this repository via HTTPS.
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between gap-2">
                                        <input 
                                            className="border rounded px-2 py-1 w-100 bg-secondary bg-opacity-10" 
                                            type="text" 
                                            value={props.ssh_url}
                                            ref={textAreaRef}/>
                                        <span onClick={()=> copyToClipboard(props.ssh_url)}>
                                            {isCopied ? (
                                                <svg
                                                    role="button" 
                                                    aria-hidden="true" 
                                                    viewBox="0 0 16 16" 
                                                    width="16" 
                                                    height="16" fill={isCopied ? "green" : "currentColor"}>
                                                    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                                                </svg>
                                            ) : (
                                                <svg
                                                role="button" 
                                                aria-hidden="true" 
                                                className="octicon" 
                                                viewBox="0 0 16 16" 
                                                width="16" 
                                                height="16" fill={isCopied ? "green" : "currentColor"}>
                                                    <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
                                                    <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
                                                </svg>
                                            )}
                                        </span>
                                    </div>
                                    <p className="py-2 fs-md text-secondary border-bottom">Use a password-protected SSH key.</p>
                         
                                </div>
                            )}
                            {selectedClone === 'Github CLI' &&(
                                <div>
                                    <div className="d-flex align-items-center justify-content-between gap-2">
                                        <input 
                                            className="border rounded px-2 py-1 w-100 bg-secondary bg-opacity-10" 
                                            type="text" 
                                            value={`git clone git@github.com:${props.username}/${props.repo_name}.git`}
                                            ref={textAreaRef}/>
                                    
                                        <span onClick={()=>copyToClipboard(`git clone git@github.com:${props.username}/${props.repo_name}.git`)}>
                                            {isCopied ? (
                                                <svg
                                                    role="button" 
                                                    aria-hidden="true" 
                                                    viewBox="0 0 16 16" 
                                                    width="16" 
                                                    height="16" fill={isCopied ? "green" : "currentColor"}>
                                                    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                                                </svg>
                                            ) : (
                                                <svg
                                                role="button" 
                                                aria-hidden="true" 
                                                className="octicon" 
                                                viewBox="0 0 16 16" 
                                                width="16" 
                                                height="16" fill={isCopied ? "green" : "currentColor"}>
                                                    <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
                                                    <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
                                                </svg>
                                            )}
                                        </span>
                                    </div>
                                    <p className="py-2 fs-md text-secondary border-bottom">Work fast with our official CLI. <a className="text-primary" href="https://cli.github.com" target="_blank" aria-label="Learn more about the GitHub CLI">Learn more</a></p>
                         
                                </div>
                            )}
                            <ul role="menu" aria-labelledby=":r5:" className="list-unstyled">
                                <li className="d-flex gap-2 border-bottom pb-3" aria-labelledby=":r1h:--label " role="menuitem" >
                                    <span className="Box-sc-g0xbh4-0 dUvhmM">
                                        <svg aria-hidden="true" focusable="false" role="img" className="octicon octicon-desktop-download" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                                            <path d="m4.927 5.427 2.896 2.896a.25.25 0 0 0 .354 0l2.896-2.896A.25.25 0 0 0 10.896 5H8.75V.75a.75.75 0 1 0-1.5 0V5H5.104a.25.25 0 0 0-.177.427Z"></path>
                                            <path d="M1.573 2.573a.25.25 0 0 0-.073.177v7.5a.25.25 0 0 0 .25.25h12.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-3a.75.75 0 1 1 0-1.5h3A1.75 1.75 0 0 1 16 2.75v7.5A1.75 1.75 0 0 1 14.25 12h-3.727c.099 1.041.52 1.872 1.292 2.757A.75.75 0 0 1 11.25 16h-6.5a.75.75 0 0 1-.565-1.243c.772-.885 1.192-1.716 1.292-2.757H1.75A1.75 1.75 0 0 1 0 10.25v-7.5A1.75 1.75 0 0 1 1.75 1h3a.75.75 0 0 1 0 1.5h-3a.25.25 0 0 0-.177.073ZM6.982 12a5.72 5.72 0 0 1-.765 2.5h3.566a5.72 5.72 0 0 1-.765-2.5H6.982Z"></path>
                                        </svg> 
                                    </span>
                                    <div data-component="ActionList.Item--DividerContainer" className="Box-sc-g0xbh4-0 idyalt">
                                        <span id=":r1h:--label">Open with GitHub Desktop</span>
                                    </div>
                                </li>
                                <li className="pt-3" role="none">
                                    <a className="d-flex gap-2" aria-labelledby=":r1i:--label " role="menuitem" id=":r1i:" href={`/${props.username}/${props.repo_name}/archive/refs/heads/main.zip`} rel="nofollow">
                                        <span className="Box-sc-g0xbh4-0 dUvhmM">
                                            <svg aria-hidden="true" focusable="false" role="img" className="octicon octicon-file-zip" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                                                <path d="M3.5 1.75v11.5c0 .09.048.173.126.217a.75.75 0 0 1-.752 1.298A1.748 1.748 0 0 1 2 13.25V1.75C2 .784 2.784 0 3.75 0h5.586c.464 0 .909.185 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v8.586A1.75 1.75 0 0 1 12.25 15h-.5a.75.75 0 0 1 0-1.5h.5a.25.25 0 0 0 .25-.25V4.664a.25.25 0 0 0-.073-.177L9.513 1.573a.25.25 0 0 0-.177-.073H7.25a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5h-3a.25.25 0 0 0-.25.25Zm3.75 8.75h.5c.966 0 1.75.784 1.75 1.75v3a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1-.75-.75v-3c0-.966.784-1.75 1.75-1.75ZM6 5.25a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 6 5.25Zm.75 2.25h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM8 6.75A.75.75 0 0 1 8.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 8 6.75ZM8.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM8 9.75A.75.75 0 0 1 8.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 8 9.75Zm-1 2.5v2.25h1v-2.25a.25.25 0 0 0-.25-.25h-.5a.25.25 0 0 0-.25.25Z"></path>
                                            </svg>
                                        </span>
                                        <div data-component="ActionList.Item--DividerContainer" className="Box-sc-g0xbh4-0 idyalt">
                                            <span id=":r1i:--label" className="Box-sc-g0xbh4-0 gnKQLm">Download ZIP</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )}
                    {selectedOption === 'Codespaces' && (
                        <div>
                            <p>Codespaces Content</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}