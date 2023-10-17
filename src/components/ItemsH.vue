<template>
  <tr>
    <th scope="row">{{ item.id }}</th>
    <td>{{ item.title }}</td>
    <td>{{ item.cantidad }}</td>
    <td>
    </td>
    <td>${{ item.precio * item.cantidad }}</td>
  </tr>
</template>

<script>

export default {
  props: ["item"],
};
</script>