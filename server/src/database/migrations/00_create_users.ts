import Knex from 'knex';

export async function up(knex:Knex){
return knex.schema.createTable('users', table => {
  table.string('name').notNullable();
  table.increments('id').primary();
  table.string('avatar').notNullable();
  table.string('whatsapp').notNullable();
  table.string('bio').notNullable();
})
}


export async function down(knex:Knex){
  return knex.schema.dropTable('users');
}