import { gql } from "apollo-server-azure-functions";

const typeDefs = gql`
    type ListItem {
        id: ID,
        list: List!
        title: String,
        status: String
    }

    type List {
        id: ID,
        title: String
        items: [ListItem]
    }

    type Experience {
        id: ID,
        company: String
        position: String
        location: String
        startDate: String
        endDate: String
        overview: String
        keyResponsibilities: [String]
        keyAchievements: [String]
    }

    type Education {
        id: ID,
        institution: String
        degree: String
        major: String
        startDate: String
        endDate: String
        location: String
        overview: String
    }

    type CV {
        id: ID,
        name: String
        position: String
        overview: String
        capabilities: [String]
        qualifications: [String]
        certifications: [String]
        experience: [Experience]
        education: [Education]
    }

    type CVList {
        id: ID,
        title: String
        cvs: [CV]
    }

    type Query {
        Lists: [List]
        ListById(listId: String!): List
        ListItems(listId: String!): [ListItem]
        ListItemById(listItemId: String!): ListItem
        CVLists: [CVList]
        CVListById(cvListId: String!): CVList
    }
`;

export default typeDefs;