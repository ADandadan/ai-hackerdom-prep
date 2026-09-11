import { mutation } from "./_generated/server";
import { v } from "convex/values";

type Announcement = {
    id: string;
    title: string;
    body: string;
    createdAt: number;
};

export const addAnnouncement = mutation({
    args: {
        Announcement: v.object({
            id: v.string(),
            title: v.string(),
            body: v.string(),
            createdAt: v.number(),
        }),
    },
    handler: async (ctx, args) => {
        console.log(args.Announcement.id + " sent an announcement: " + args.Announcement.title);
        await ctx.db.insert("announcements", {
            ...args.Announcement
        });
    },
});

