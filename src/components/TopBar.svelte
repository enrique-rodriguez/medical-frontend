<script lang="ts">
    
</script>

<div id="topbar" class="d-flex align-items-center fixed-top">
    <div class="container d-flex justify-content-between">
        <div class="contact-info d-flex align-items-center">
            <i class="bi bi-envelope" />
            <a href="mailto:contact@example.com">contact@example.com</a>
            <i class="bi bi-phone" /> +1 5589 55488 55
        </div>
        <div class="d-none d-lg-flex social-links align-items-center">
            <a href="#hello" class="twitter"><i class="bi bi-twitter" /></a>
            <a href="#hello" class="facebook"><i class="bi bi-facebook" /></a>
            <a href="#hello" class="instagram"><i class="bi bi-instagram" /></a>
            <a href="#hello" class="linkedin"><i class="bi bi-linkedin" /></a>
        </div>
    </div>
</div>

<style>
    #topbar {
        background: #fff;
        height: 40px;
        font-size: 14px;
        transition: all 0.5s;
        z-index: 996;
    }

    #topbar .contact-info a {
        line-height: 1;
        color: #444444;
        transition: 0.3s;
    }
    #topbar .contact-info a:hover {
        color: #1977cc;
    }
    #topbar .contact-info i {
        color: #1977cc;
        padding-right: 4px;
        margin-left: 15px;
        line-height: 0;
    }
    #topbar .contact-info i:first-child {
        margin-left: 0;
    }
    #topbar .social-links a {
        color: #437099;
        padding-left: 15px;
        display: inline-block;
        line-height: 1px;
        transition: 0.3s;
    }
    #topbar .social-links a:hover {
        color: #1977cc;
    }
    #topbar .social-links a:first-child {
        border-left: 0;
    }
</style>
