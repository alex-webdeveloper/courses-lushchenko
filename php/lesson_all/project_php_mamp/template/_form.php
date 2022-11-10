<form action="" method="POST" enctype="multipart/form-data">
    <fieldset>
        <div class="form-group">
            <label for="exampleFormControlInput1">Title</label>
            <input class="form-control" id="exampleFormControlInput1" type="text" name="title" value="<?php echo $result['title']; ?>">
        </div>
        <div class="form-group">
            <label for="exampleFormControlInput2">URL</label>
            <input class="form-control" id="exampleFormControlInput2" type="text" name="url" value="<?php echo $result['url']; ?>">
        </div>
        <div class="form-group">
            <label for="exampleFormControlTextarea1">Min description</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" name="descr_min"><?php echo $result['descr_min']; ?></textarea>
        </div>
        <div class="form-group">
            <label for="exampleFormControlTextarea2">Description</label>
            <textarea class="form-control" id="exampleFormControlTextarea2" rows="10" name="description"><?php echo $result['description']; ?></textarea>
        </div>
        <div class="form-group">
            <label for="exampleFormControlSelect1">Category</label>
            <select class="form-control" id="exampleFormControlSelect1" name="cid">
                <?php
                $out = '';
                for ($i = 0; $i < count($category); $i++) {
                    if ($category[$i]['id'] ===  $result['cid']) {
                        $out .= '<option value="' . $category[$i]['id'] . '" selected>' . $category[$i]['title'] . "</option>";
                    } else {
                        $out .= '<option value="' . $category[$i]['id'] . '">' . $category[$i]['title'] . "</option>";
                    }
                }
                echo $out;
                ?>
            </select>
        </div>
        <div class="form-group">
            <label for="image">Photo</label>
            <input id="image" type="file" name="image" value="<?php echo $result['image']; ?>">
        </div>
        <div class="form-group">
            <?php
            if (isset($result['image']) and $result['image'] != '') {
                echo '<img alt="foto" class="img-fluid min" src="' . SETEURL . '/static/images/' . $result['image'] . '">';
            }
            ?>
        </div>
        <div class="form-group">
            <input class="btn btn-primary" type="submit" name="submit" value="<?php echo $action; ?>">
            <div class="form-group">
    </fieldset>
</form>