$(document).ready(function(){
  // ========= Add Task ==========
  let addBtn = $('.add-btn');
  let listBlock = $('.list-block');
  let taskText = $('#to-do-text');

  addBtn.on('click', function(){
    let newTask =
    `<div class="task-block white-bg">
      <div class="checkbox blue-bg">
        <input type="checkbox">
      </div>
      <div class="task-text">${taskText.val()}</div>
      <div class="delete-btn button blue-bg"></div>
    </div>`
    listBlock.append(newTask);
    taskText.val('');
  })

  // ========= Delete Task ==========
  let deleteBtn = $('.delete-btn');

  listBlock.on('click', '.delete-btn', function(){
    $(this).parent().remove();
  })

  // ========= Checked Task ==========
  listBlock.on('change', '.checkbox input', function(){
    $(this).parent().next().toggleClass('checked');
  })

  // ========= Sortable ==========
  $('#list-body').sortable();
})
