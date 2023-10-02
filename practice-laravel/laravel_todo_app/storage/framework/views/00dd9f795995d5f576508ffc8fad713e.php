<div class="modal fade" id="addGoalModal" tabindex="-1" aria-labelledby="addGoalModalLavel">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="addGoalModalLabel">目標の追加</h5>
        <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="閉じる"></button>
      </div>
      <form action="<?php echo e(route('goals.store')); ?>" method="post">
        <?php echo csrf_field(); ?>
        <div class="modal-body">
          <input type="text" class="form-control" name="title">
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-primary">登録</button>
        </div>
      </form>
    </div>
  </div>
</div><?php /**PATH /var/www/html/resources/views/modals/add_goal.blade.php ENDPATH**/ ?>