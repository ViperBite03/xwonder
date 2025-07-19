import { sqliteTable, primaryKey, text, integer, blob, real } from 'drizzle-orm/sqlite-core'

export const User = sqliteTable('user', {
  id: text('id').primaryKey().notNull(),
  password: text('password'),
  resetToken: text('reset_token'),
  resetTokenExpiration: integer('reset_token_expiration', { mode: 'timestamp' }),
  roles: blob('roles', { mode: 'json' }).default([]),
})

export const Session = sqliteTable('session', {
  id: text('id').primaryKey().notNull(),
  userId: text('user_id')
    .notNull()
    .references(() => User.id),
  expiresAt: integer('expires_at'),
})
