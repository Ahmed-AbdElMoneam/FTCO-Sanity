import {defineField, defineType} from 'sanity'

export const jobPostType = defineType({
  name: 'jobPost',
  title: 'Job Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'workLocationType',
      title: 'Work Location Type',
      type: 'string',
      options: {
        list: [
          {title: 'On site', value: 'On-site'},
          {title: 'Remote', value: 'Remote'},
          {title: 'Hybrid', value: 'Hybrid'},
        ],
      },
      description: 'Select the work location type for this position',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'jobType',
      title: 'Job Type',
      type: 'string',
      options: {
        list: [
          {title: 'Full-time', value: 'Full-time'},
          {title: 'Part-time', value: 'Part-time'},
          {title: 'Contract', value: 'Contract'},
          {title: 'Internship', value: 'Internship'},
          {title: 'Temporary', value: 'Temporary'},
        ],
      },
    }),
    defineField({
      name: 'level',
      title: 'Seniority Level',
      type: 'string',
      options: {
        list: [
          {title: 'Entry', value: 'Entry'},
          {title: 'Mid', value: 'Mid'},
          {title: 'Senior', value: 'Senior'},
          {title: 'Lead', value: 'Lead'},
          {title: 'Director', value: 'Director'},
        ],
      },
    }),
    defineField({
      name: 'joinUs',
      title: 'Join Us',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'description',
      title: 'Job Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'responsibilities',
      title: 'Responsibilities',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'requirements',
      title: 'Requirements',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'notPerfectFit',
      title: 'Not Perfect Fit',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'dayInTheLife',
      title: 'Day in the Life',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'whoWeAre',
      title: 'Who We Are',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'salary',
      title: 'Salary',
      type: 'string',
    }),
    defineField({
      name: 'currency',
      title: 'Currency',
      type: 'string',
      options: {
        list: [
          {title: 'SAR', value: 'SAR'},
          {title: 'USD', value: 'USD'},
          {title: 'EUR', value: 'EUR'},
          {title: 'GBP', value: 'GBP'},
          {title: 'Other', value: 'other'},
        ],
      },
    }),
    defineField({
      name: 'postedDate',
      title: 'Posted Date',
      type: 'datetime',
      description: 'Job post date',
    }),
    defineField({
      name: 'applicationDeadline',
      title: 'Application Deadline',
      type: 'datetime',
      description: 'Job post deadline',
    }),
    defineField({
      name: 'applyLink',
      title: 'Apply Link',
      type: 'url',
      description: 'Job apply link',
    }),
    defineField({
      name: 'applyEmail',
      title: 'Apply Email',
      type: 'email',
      description: 'Job apply email',
    }),
    defineField({
      name: 'applyPhone',
      title: 'Apply Phone',
      type: 'string',
      description: 'Job apply phone number',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'email',
    }),
    defineField({
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string',
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'published',
      title: 'Published',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => Rule.required(),
    }),
  ],
})
