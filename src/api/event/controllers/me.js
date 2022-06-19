'use strict';
const {sanitizeEntity} =require('strapi-utils')

/**
 * A set of functions called "actions" for `me`
 */

module.exports = {
  async me(ctx) {
    const user = ctx.state.user;
    if(!user){
        return ctx.badRequest(null, [
            {messages: [{id: "No authorization header was found"}]},
        ]);
    }

    const data = await strapi.services.event.find({user: user.id})

    if(!data){
        return ctx.notFound()
    }
    return sanitizeEntity(data, {model: strapi.models.events})
  }
};
