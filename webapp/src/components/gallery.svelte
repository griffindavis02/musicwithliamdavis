<script>
</script>

<!-- https://www.w3schools.com/howto/howto_css_image_grid_responsive.asp -->
<!--FIXME have alt entered into db with image for population here -->
<div class="row">
    <div class="column">
        <img src="images/DSC_0576.JPG" alt="">
        <img src="images/DSC_0324.JPG" alt="">
        <img src="images/pats.jpg" alt="">
    </div>
    <div class="column">
        <img src="images/DSC_0631.JPG" alt="">
        <img src="images/DSC_0560.JPG" alt="">
        <img src="images/DSC_0658.JPG" alt="">
    </div>
</div>

<style>

    .row {
        display: flex;
        flex-wrap: wrap;
        padding: 0 0.5rem;
    }

    /* Create two equal columns that sits next to each other */
    .column {
        flex: 50%;
        max-width: 50%;
        padding: 0 0.5rem;
    }

    .column img {
        margin-top: 1rem;
        vertical-align: middle;
        width: 100%;
        transition: all .2s;
    }

    .column img:hover {
        transform: scale(1.04);
    }

    /* Responsive layout - makes a two column-layout instead of four columns */
    @media screen and (max-width: 800px) {
        .column {
            flex: 50%;
            max-width: 50%;
        }
    }

    /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
    @media screen and (max-width: 600px) {
        .column {
            flex: 100%;
            max-width: 100%;
        }
    }
</style>

