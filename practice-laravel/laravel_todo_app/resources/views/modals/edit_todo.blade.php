<div id="editTodoModal{{ $todo->id }}" class="modal fade" tabindex="-1" aria-labelledby="editTodoModalLabel{{ $todo->id }}">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 id="editTodoModalLabel{{ $todo->id }}" class="modal-title">ToDoの編集</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="閉じる"></button>
      </div>
      <form action="{{ route('goals.todos.update', [$goal, $todo]) }}" method="POST">
        @csrf
        @method('patch')
        <div class="modal-body">
          <input type="text" class="form-contorol" name="content" value="{{ $todo->content }}">
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-primary">更新</button>
        </div>
      </form>
    </div>
  </div>
</div>