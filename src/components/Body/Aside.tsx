function Aside() {
    return (
        <aside className="bd-sidebar d-none">
            <div className="offcanvas-lg offcanvas-start show"  id="bdSidebar" aria-labelledby="bdSidebarOffcanvasLabel" aria-modal="true" role="dialog">
                <div className="d-flex">
                    <h5 className="offcanvas-title" id="bdSidebarOffcanvasLabel">Browse docs</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-target="#bdSidebar"></button>
                </div>
                <ul className="list-unstyled fw-normal pb-2 small">
                    <li><a href="/docs/5.3/getting-started/introduction/" className="bd-links-link d-inline-block rounded">Introduction</a></li>
                    <li><a href="/docs/5.3/getting-started/download/" className="bd-links-link d-inline-block rounded">Download</a></li>
                    <li><a href="/docs/5.3/getting-started/contents/" className="bd-links-link d-inline-block rounded">Contents</a></li>
                    <li><a href="/docs/5.3/getting-started/browsers-devices/" className="bd-links-link d-inline-block rounded">Browsers &amp; devices</a></li>
                    <li><a href="/docs/5.3/getting-started/javascript/" className="bd-links-link d-inline-block rounded">JavaScript</a></li>
                    <li><a href="/docs/5.3/getting-started/webpack/" className="bd-links-link d-inline-block rounded">Webpack</a></li>
                    <li><a href="/docs/5.3/getting-started/parcel/" className="bd-links-link d-inline-block rounded">Parcel</a></li>
                    <li><a href="/docs/5.3/getting-started/vite/" className="bd-links-link d-inline-block rounded">Vite</a></li>
                    <li><a href="/docs/5.3/getting-started/accessibility/" className="bd-links-link d-inline-block rounded">Accessibility</a></li>
                    <li><a href="/docs/5.3/getting-started/rfs/" className="bd-links-link d-inline-block rounded">RFS</a></li>
                    <li><a href="/docs/5.3/getting-started/rtl/" className="bd-links-link d-inline-block rounded">RTL</a></li>
                    <li><a href="/docs/5.3/getting-started/contribute/" className="bd-links-link d-inline-block rounded">Contribute</a></li>
                </ul>
            </div>
        </aside>
    )
}

export default Aside