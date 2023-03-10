puts "Seeding inputs..."
input1 = Input.create(name: "request for info from internet")
input2 = Input.create(name: "post info from senses to internet")
input3 = Input.create(name: "post info from mind to internet")
input4 = Input.create(name: "request modification of info from senses")
input5 = Input.create(name: "take in desire and sense from external")
input6 = Input.create(name: "internet prompt")

puts "Seeding outputs..."
output1 = Output.create(name: "provides info received from internet")
output2 = Output.create(name: "provides result of computation")
output3 = Output.create(name: "action taken over internet")
output4 = Output.create(name: "alter interpretation of senses")
output5 = Output.create(name: "notification")
output6 = Output.create(name: "share to other people with neuralink")
output7 = Output.create(name: "share to other robot with neuralink")

user1 = User.create(username: "ethan", password: "ethan")
user2 = User.create(username: "nard", password: "nard")

puts "Seeding functions..."
Function.create(name: "know where to go, how long it will take", category: "downloading info", input_id: input1.id, output_id: output1.id, user_id: user1.id)
Function.create(name: "do a kickflip", category: "downloading info", input_id: input1.id, output_id: output1.id, user_id: user1.id)
Function.create(name: "listen to music without headphones", category: "downloading info", input_id: input1.id, output_id: output1.id, user_id: user1.id)
Function.create(name: "speak any language", category: "downloading info", input_id: input1.id, output_id: output1.id, user_id: user1.id)
Function.create(name: "know all info", category: "downloading info", input_id: input1.id, output_id: output1.id, user_id: user1.id)
Function.create(name: "download videos and articles", category: "downloading info", input_id: input1.id, output_id: output1.id, user_id: user2.id)
Function.create(name: "dogs can talk", category: "new abilities", input_id: input1.id, output_id: output1.id, user_id: user2.id)
Function.create(name: "perfect memory", category: "body enhancements", input_id: input2.id, output_id: output1.id, user_id: user2.id)
Function.create(name: "relive moments", category: "body enhancements", input_id: input1.id, output_id: output4.id, user_id: user2.id)
Function.create(name: "digital zoom eyes", category: "body enhancements", input_id: input4.id, output_id: output4.id, user_id: user2.id)
Function.create(name: "feeling to external objects", category: "body enhancements", input_id: input4.id, output_id: output4.id)
Function.create(name: "lights, temperature adjusted automatically from brain", category: "connect to real world", input_id: input5.id, output_id: output3.id)
Function.create(name: "make music from mind", category: "connect to real world", input_id: input3.id, output_id: output2.id)
Function.create(name: "control will power, listen to body not mind", category: "control thoughts", input_id: input5.id, output_id: output4.id)
Function.create(name: "filter images & noises", category: "control thoughts", input_id: input4.id, output_id: output4.id)
Function.create(name: "turn pain off, rather fix it", category: "control thoughts", input_id: input4.id, output_id: output4.id)
Function.create(name: "remove fear", category: "control thoughts", input_id: input4.id, output_id: output4.id)
Function.create(name: "drunk driving, crime", category: "control thoughts", input_id: input2.id, output_id: output3.id)
Function.create(name: "cure cancer by recognizing instantly", category: "control thoughts", input_id: input2.id, output_id: output5.id)
Function.create(name: "not be cold", category: "control thoughts", input_id: input4.id, output_id: output4.id)
Function.create(name: "communicate without words", category: "furthering socialization", input_id: input3.id, output_id: output6.id)
Function.create(name: "text received by brain, respond when ready", category: "furthering socialization", input_id: input6.id, output_id: output5.id)
Function.create(name: "know what people want/thinking", category: "furthering socialization", input_id: input3.id, output_id: output6.id)
Function.create(name: "transfer ideas brain to brain exactly", category: "furthering socialization", input_id: input3.id, output_id: output6.id)
Function.create(name: "metaverse presence from mind", category: "furthering socialization", input_id: input3.id, output_id: output6.id)
Function.create(name: "telepresence - mars robot", category: "furthering socialization", input_id: input3.id, output_id: output7.id)
Function.create(name: "ride bike together", category: "furthering socialization", input_id: input1.id, output_id: output4.id)
Function.create(name: "multiple you - damage body", category: "furthering socialization", input_id: input3.id, output_id: output7.id)
Function.create(name: "ai of all brains - automate brain", category: "furthering socialization", input_id: input3.id, output_id: output6.id)
Function.create(name: "doctors knows your problems, can feel them", category: "furthering socialization", input_id: input2.id, output_id: output6.id)
Function.create(name: "share all senses, feeling too", category: "furthering socialization", input_id: input2.id, output_id: output6.id)
Function.create(name: "picture in picture lives", category: "furthering socialization", input_id: input3.id, output_id: output4.id)
Function.create(name: "live in someones body - documentary past or present", category: "furthering socialization", input_id: input1.id, output_id: output4.id)
Function.create(name: "experience anything", category: "furthering socialization", input_id: input1.id, output_id: output4.id)
Function.create(name: "transplant spirit", category: "furthering socialization", input_id: input3.id, output_id: output7.id)
Function.create(name: "overall perspective of world - average opinion, brainstorm", category: "furthering socialization", input_id: input3.id, output_id: output6.id)
Function.create(name: "treadmill bike totally real world", category: "furthering socialization", input_id: input4.id, output_id: output4.id)
Function.create(name: "social media, enter life as story", category: "furthering socialization", input_id: input1.id, output_id: output4.id)


puts "??? Done seeding!"