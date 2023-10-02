<div class="modal fade" id="addTodoModal<?php echo e($goal->id); ?>" tabindex="-1" aria-labelledby="addTodoModalLabel<?php echo e($goal->id); ?>">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="addTodoMldalLabel<?php echo e($goal->id); ?>">ToDoの追加</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="閉じる"></button>
      </div>
      <form action="<?php echo e(route('goals.todos.store', $goal)); ?>" method="POST">
        <?php echo csrf_field(); ?>
        <div class="modal-body">
          <input type="text" class="form-control" name="content">
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary" type="submit">登録</button>
        </div>
      </form>
    </div>
  </div>
</div><?php /**PATH /var/www/html/resources/views/modals/add_todo.blade.php ENDPATH**/ ?>