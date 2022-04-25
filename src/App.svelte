<script lang="ts">
	import router from "page";
	import Home from "./pages/Home.svelte";
    import TopBar from "./components/TopBar.svelte";
    import Footer from "./components/Footer.svelte";
    import Header from "./components/Header.svelte";

	let page;

	router('/', () => page = Home);

	router.start();
</script>

<TopBar />
<Header />

<svelte:component this={page}/>
<Footer />

<style>
    :global(body) {
        font-family: "Open Sans", sans-serif;
        color: #444444;
    }

    :global(a) {
        color: #1977cc;
        text-decoration: none;
    }

    :global(a:hover) {
        color: #3291e6;
        text-decoration: none;
    }

    :global(h1),
    :global(h2),
    :global(h3),
    :global(h4),
    :global(h5),
    :global(h6) {
        font-family: "Raleway", sans-serif;
    }

    /*--------------------------------------------------------------
# Preloader
--------------------------------------------------------------*/
    :global(#preloader) {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 9999;
        overflow: hidden;
        background: #fff;
    }

    :global(#preloader:before) {
        content: "";
        position: fixed;
        top: calc(50% - 30px);
        left: calc(50% - 30px);
        border: 6px solid #1977cc;
        border-top-color: #d1e6f9;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        -webkit-animation: animate-preloader 1s linear infinite;
        animation: animate-preloader 1s linear infinite;
    }

    @-webkit-keyframes animate-preloader {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes animate-preloader {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    /*--------------------------------------------------------------
# Back to top button
--------------------------------------------------------------*/
    :global(.back-to-top) {
        position: fixed;
        visibility: hidden;
        opacity: 0;
        right: 15px;
        bottom: 15px;
        z-index: 996;
        background: #1977cc;
        width: 40px;
        height: 40px;
        border-radius: 4px;
        transition: all 0.4s;
    }
    :global(.back-to-top i) {
        font-size: 28px;
        color: #fff;
        line-height: 0;
    }
    :global(.back-to-top:hover) {
        background: #298ce5;
        color: #fff;
    }
    :global(.back-to-top.active) {
        visibility: visible;
        opacity: 1;
    }

    :global(.datepicker-dropdown) {
        padding: 20px !important;
    }

    /*--------------------------------------------------------------
# Hero Section
--------------------------------------------------------------*/

    /*--------------------------------------------------------------
# Sections General
--------------------------------------------------------------*/
    :global(section) {
        padding: 60px 0;
        overflow: hidden;
    }

    :global(.section-bg) {
        background-color: #f1f7fd;
    }

    :global(.section-title) {
        text-align: center;
        padding-bottom: 30px;
    }
    :global(.section-title h2) {
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 20px;
        padding-bottom: 20px;
        position: relative;
        color: #2c4964;
    }
    :global(.section-title h2::before) {
        content: "";
        position: absolute;
        display: block;
        width: 120px;
        height: 1px;
        background: #ddd;
        bottom: 1px;
        left: calc(50% - 60px);
    }
    :global(.section-title h2::after) {
        content: "";
        position: absolute;
        display: block;
        width: 40px;
        height: 3px;
        background: #1977cc;
        bottom: 0;
        left: calc(50% - 20px);
    }
    :global(.section-title p) {
        margin-bottom: 0;
    }

    /*--------------------------------------------------------------
# Breadcrumbs
--------------------------------------------------------------*/
    :global(.breadcrumbs) {
        padding: 20px 0;
        background-color: #f1f7fd;
        min-height: 40px;
        margin-top: 120px;
    }

    @media (max-width: 992px) {
        :global(.breadcrumbs) {
            margin-top: 100px;
        }
    }
    :global(.breadcrumbs h2) {
        font-size: 24px;
        font-weight: 300;
        margin: 0;
    }
    @media (max-width: 992px) {
        :global(.breadcrumbs h2) {
            margin: 0 0 10px 0;
        }
    }
    :global(.breadcrumbs ol) {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        padding: 0;
        margin: 0;
        font-size: 14px;
    }
    :global(.breadcrumbs ol li + li) {
        padding-left: 10px;
    }
    :global(.breadcrumbs ol li + li::before) {
        display: inline-block;
        padding-right: 10px;
        color: #6c757d;
        content: "/";
    }
    @media (max-width: 768px) {
        :global(.breadcrumbs .d-flex) {
            display: block !important;
        }
        :global(.breadcrumbs ol) {
            display: block;
        }
        :global(.breadcrumbs ol li) {
            display: inline-block;
        }
    }
</style>


