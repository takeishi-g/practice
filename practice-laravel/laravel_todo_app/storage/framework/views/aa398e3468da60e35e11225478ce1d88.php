<div class="modal fade" id="deleteTagModal" tabindex="-1" aria-labelledby="deleteTagModalLabel">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="deleteTagModalLabel"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="閉じる"></button>
      </div>
      <div class="modal-footer">
        <form action="" method="post" name="deleteTagForm">
          <?php echo csrf_field(); ?>
          <?php echo method_field('delete'); ?>
          <button type="submit" class="btn btn-danger">削除</button>
      </div>
      </form>
    </div>
  </div>
</div><?php /**PATH /var/www/html/resources/views/modals/delete_tag.blade.php ENDPATH**/ ?>