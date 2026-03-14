export default{
    name:'experiences',
    title:'Education & Activities',
    type: 'document',
    fields:[
        {
            name:'year',
            title:'Year',
            type:'string'
        },
        {
            name:'works',
            title:'Programs / Projects',
            type:'array',
            of:[{ type:'workExperience'}]
        },
    ]
}
