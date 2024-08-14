
 const _pushMessageLocally = async (data) => {
    try {
      // set thread id
    console.log(`isUserTypeSomething` , isUserTypeSomething)
    
      if(!isUserTypeSomething.current){
        return 
      }
      

      if (!myTreadId) {
        await addParams(data);
      }
     

      if (data.thread_id == myTreadId) {
        setIsGettingReply((prev) =>
          prev === true && data?.chat_ref_id ? false : true
        );

        setCurrentChatFullRes(data);
        if (data?.placesData?.length > 0) {
          const res = getFilterPlaceData(data?.placesData);
          setMapPlaces(res);

          const resCard = await getFilterPlaceDataCard(data?.placesData);
          setMapPlacesCard(resCard);
        }
        if (data.thread_id) {
          // console.log("setting selectedThread_id via _pushMessageLocally");
          setselectedThread_id(data.thread_id);
        }

        // receiver msg code then show on top
        const chat = [
          {
            _id: data.timestamp,
            is_msg_not_printed: data.user == getKey("kogonautID") ? 1 : 0,
            waiting: false,
            message: data.message,
            image: data.image,
            card_data: data.card_data ?? null,
            sent_at: data.timestamp,
            user: {
              _id: data.user,
              first_name: "",
              last_name: "",
              profile_image: "",
            },
            category: data?.category,
            placesData: data?.placesData,
          },
        ];

        let msg =
          data.user === props.login_user_id &&
          data.isImagePath &&
          data.isImagePath === "yes"
            ? false
            : true;

        if (msg) {
          setchats((prevChats) => {
            const lastChatIndex = prevChats.length - 1;
            // console.log("before condition", prevChats[lastChatIndex], ...chat);
            if (lastChatIndex >= 0) {
              // console.log("pushmessage chats...");
              if (prevChats[lastChatIndex]?.user?._id != chat[0].user._id) {
                // console.log(
                //   "in condition",
                //   prevChats[lastChatIndex]?.user?._id,
                //   chat[0].user._id
                // );
                const updatedChats = [...prevChats, ...chat];
                // console.log("updatedLastChat if", updatedChats);
                return updatedChats;
              } else {
                // Clone the last chat object and append the new data
                const updatedLastChat = {
                  ...prevChats[lastChatIndex],
                  ...chat[0],
                };
                // console.log("updatedLastChat else", updatedLastChat);
                // Update the chats array with the updated last chat object
                return [...prevChats.slice(0, lastChatIndex), updatedLastChat];
              }
            } else {
              // If the chats array is empty, simply add the new chat
              // console.log("pushmessage chats... in empty array");
              return [...chat];
            }
          });

          setWaitingForReply(
            data.is_boat_reply && data.is_boat_reply == "yes" ? false : true
          );


        }
      }
    } catch (err) {
      console.log(err.message);
    }
  };
