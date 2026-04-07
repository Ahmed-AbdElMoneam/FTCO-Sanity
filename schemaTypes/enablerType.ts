import {defineField, defineType} from 'sanity'

export const enablerType = defineType({
  name: 'enabler',
  title: 'Enabler',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'enable',
      title: 'Enable',
      type: 'boolean',
      initialValue: true,
      validation: (Rule) => Rule.required(),
    }),
  ],
})
