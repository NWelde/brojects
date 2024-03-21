import telethon
from telethon.sync import TelegramClient
from telethon.tl.functions.contacts import ImportContactsRequest
from telethon.tl.types import InputPhoneContact
from telethon.errors import FloodWaitError
from tqdm import tqdm

# Replace with your actual Telegram API ID and hash
api_id = "your api id it should be a number"
api_hash = "your api has from telegram"

# Your phone number
phone = "+1234567890"

def add_members_to_group(group_username):
    """Adds specified members to a Telegram group using a user account.

    Args:
        group_username (str): The username of the target group.
    """

    # Use your phone number for authorization
    client = TelegramClient(phone, api_id, api_hash)
    client.start()

    # Get phone numbers input
    phone_numbers_input = input("Enter phone numbers (comma-separated): ")
    phone_numbers = ["+251" + number.strip()[1:] if number.strip().startswith("0") else "+251" + number.strip() for number in phone_numbers_input.split(",")]

    # Add phone numbers to contacts
    for i, phone_number in enumerate(phone_numbers):
        contact = InputPhoneContact(client_id=i, phone=phone_number, first_name="User"+str(i), last_name="")
        result = client(ImportContactsRequest([contact]))

    # Retrieve group entity
    group_entity = client.get_entity(group_username)

    # List to store numbers that couldn't be added
    failed_numbers = []

    # Add members
    for phone_number in tqdm(phone_numbers, desc="Adding members", unit="member"):
        try:
            client(
                telethon.functions.channels.InviteToChannelRequest(
                    channel=group_entity,
                    users=[client.get_input_entity(phone_number)],
                )
            )
            print(f"Added {phone_number} to the group.")
        except FloodWaitError as e:
            print(f"You must wait {e.seconds / 60} minutes before trying again.")
            failed_numbers.append(phone_number)
        except Exception as e:
            print(f"Error adding {phone_number}: {e}")
            failed_numbers.append(phone_number)

    # Ask the user where to store the txt file
    file_path = input("Enter the path where you want to store the txt file: ")

    # Write failed numbers to a txt file
    with open(f"{file_path}/failed_numbers.txt", "w") as f:
        for number in failed_numbers:
            f.write(f"{number}\\n")

# Replace with your group's username
group_username = "your_groups_username"

# Run the function
add_members_to_group(group_username)
