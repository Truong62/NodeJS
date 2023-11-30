$(document).ready(function () {
  $("#delete-button").click(async function () {
    const userId = $(this).data("user-id");
    try {
      const response = await fetch(`/deleteUser/${userId}`, {
        method: "DELETE",
      });

      const data = await response.json();
      if (response.status === 200) {
        $(`#${data.userId}`).remove();
        alert(data.message);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error deleting user: ", error);
    }
  });
});
