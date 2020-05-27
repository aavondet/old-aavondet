<template>
    <footer>
        <div class="made">
            Designed and made by Arnaud
        </div>
        <div class="icons">
            <a href="https://github.com/aavondet"><img src='../assets/social/github.svg'></a>
            <a href="https://twitter.com/aavondet_"><img src='../assets/social/twitter.svg'></a>
            <a href="https://www.linkedin.com/in/aavondet/"><img src='../assets/social/linkedin.svg'></a>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
footer {
    background-color: #bbb;
    display:block;
    text-align: center;
}
img {
    width: 50px;
    fill: currentColor;
    margin: 10px;
}
.made {
    padding-top: 40px;
    padding-bottom: 20px;
}
.icons {
    padding-top: 20px;
    padding-bottom: 40px;
}
</style>
